// Slides Functionality

window.addEventListener("load", function () {
  const slides = document.querySelectorAll(".slide");
  let index = 0;
  const length = slides.length;

  function slideShow() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");

    if (index == length - 1) {
      index = 0;
    } else {
      index++;
    }
    setTimeout(slideShow, 5000);
  }
  slideShow();
});

window.addEventListener("scroll", () => {
  if (this.scrollY > 100) {
    document.querySelector(".header").classList.add("fixed");
  } else {
    document.querySelector(".header").classList.remove("fixed");
  }
});

//

const navLinks = document.querySelectorAll(".nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((link2) => {
      link2.classList.remove("active");
    });
    let current = e.target;

    current.classList.add("active");
  });
});

document.querySelector(".toggler").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});

// Filteration Between Two or More Categories totally dynamic
const section = document.querySelector(".people-section");
const btns = document.querySelectorAll(".filter-btn");
const rows = document.querySelectorAll(
  ".people-section .justify-content-center"
);

section.addEventListener("click", function (e) {
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    rows.forEach((row) => {
      row.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
// console.log(rows);

// ----------------------- LightBox Constants

const LightBox = document.querySelector(".lightbox");
// const LightBox = document.querySelector(".lightbox");
const LightBoxImg = document.querySelector(".lightbox-img");
const LightBoxText = document.querySelector(".caption-text");
const LightBoxCounter = document.querySelector(".caption-counter");
const lightBoxClose = document.querySelector(".lightbox-close");
const nextImage = document.querySelector(".next-item");
const prevImage = document.querySelector(".prev-item");

const galleyItems = document.querySelectorAll(".gallery-item");
const totalGalleryItems = galleyItems.length;
// ---------------------- Lightbox Functions

LightBox.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target == LightBox) {
    toggleLightBox();
  }
});
lightBoxClose.addEventListener("click", function (event) {
  if (event.target === lightBoxClose) {
    toggleLightBox();
  }
});

nextImage.addEventListener("click", nextItem);
prevImage.addEventListener("click", prevItem);

// ----- Next Item
function nextItem() {
  if (itemIndex === totalGalleryItems - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
  // console.log(itemIndex);
}

// ----- Prev Item

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalGalleryItems - 1;
  } else {
    itemIndex--;
  }
  changeItem();
  // console.log(itemIndex);
}

let itemIndex = 0;

for (let i = 0; i < totalGalleryItems; i++) {
  galleyItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightBox();
  });
}

// Change The Image Source In LightBox After Clicking The Next,Prev Buttons

function changeItem() {
  imgSrc = galleyItems[itemIndex]
    .querySelector(".galler-img img")
    .getAttribute("src");
  console.log(imgSrc);
  LightBoxImg.src = imgSrc;
  // LightBoxText.innerHTML = galleyItems[itemIndex].querySelector("h4").innerHTML;
  LightBoxCounter.innerHTML = itemIndex + 1 + " of " + totalGalleryItems;
}

// ------- Toggle LightBox
function toggleLightBox() {
  LightBox.classList.toggle("open");
  console.log("Click");
}
