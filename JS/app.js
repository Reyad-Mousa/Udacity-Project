// access ul
let navList = document.getElementById("navbar__list");

// creatList item
let sections = Array.from(document.querySelectorAll("section"));
function creatList() {
  for (sec of sections) {
    // creatList-item
    listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;

    // add the <li> element as the last child element of the navList
    navList.appendChild(listItem);
    listItem.scrollIntoView({
      behavior: "smooth",
    });
  }
}
creatList();

// change class active when scroll to access a section

window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};

// function of smooth in click a section in nav list
navList.addEventListener("click", (toSec) => {
  toSec.preventDefault();
  if (toSec.target.dataset.nav) {
    document
      .getElementById(`${toSec.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${toSec.target.dataset.nav}`;
    }, 170);
  }
});
