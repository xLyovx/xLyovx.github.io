window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  let scrollY = window.scrollY;

  if (scrollY > 130) {
    navbar.style.backgroundColor = "#a9ad5d";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

function scrollToSection1(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 1700, behavior: "smooth" });
  }
}
function scrollToSection2(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 0, behavior: "smooth" });
  }
}
function scrollToSection3(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 650, behavior: "smooth" });
  }
}
function scrollToSection4(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 2200, behavior: "smooth" });
  }
}
function scrollToSection5(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 1250, behavior: "smooth" });
  }
}
