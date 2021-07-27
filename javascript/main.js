// nav bar

var nav = document.getElementById("nav");

// sticky navbar

window.addEventListener("scroll", function () {
  if (this.pageYOffset > 50) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

// navbar hightlight
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("nav .container .nav-btns a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav .container .nav-btns a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// for hamburger menu highlights
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".overlay ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".overlay ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// load animation

TweenMax.to(".first", 1.6, {
  delay: 1,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".second", 1.6, {
  delay: 1.5,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".third", 1.6, {
  delay: 2,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".logo", 1, {
  opacity: 0,
  delay: 2.4,
  x: -50,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".nav-btns a",
  1,
  {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut,
  },
  0.08
);

TweenMax.from(".blob", 1.5, {
  opacity: 0,
  delay: 3,
  ease: Expo.easeInOut,
});

TweenMax.from(".slide-pic", 1.5, {
  opacity: 0,
  delay: 3.4,
  x: 100,
  ease: Expo.easeInOut,
});

TweenMax.from(".slide-content", 1.5, {
  opacity: 0,
  delay: 3.7,
  x: -100,
  ease: Expo.easeInOut,
});

// scroll animation

window.addEventListener("load", function () {
  AOS.init({
    once: true,
  });
});
