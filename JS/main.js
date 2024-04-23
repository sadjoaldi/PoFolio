const brand = document.querySelector(".brand img");
const tabs = document.querySelectorAll(".tabs");
const content = document.querySelectorAll(".content");
const about = document.querySelector("#about");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");
let src = brand.src;

// Création d'un élément p pour la description (voir la fonction pour l'affichage de texte plustard)

function show(img) {
  brand.style.width = "100%";
  brand.style.transform = "scaleX(0px) scaleY(0px) scaleZ(0px)";
  brand.style.opacity = "0";

  setTimeout(() => {
    brand.src = img.src;
    brand.style.transform = "scaleX(20px) scaleY(100px) scaleZ(-30px)";
    brand.style.opacity = "100%";
  }, 1000);
}

function hide() {
  brand.style.width = "50vw";
  brand.style.opacity = "0";

  setTimeout(() => {
    brand.src = src;
    brand.style.opacity = "100%";
  }, 1000);
}

let switcher = 1;

function contact_btn() {
  switcher = 3;
}

tabs.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.id === about.id + "-link") {
      switcher = 1;
    } else if (element.id === project.id + "-link") {
      switcher = 2;
    } else if (element.id === contact.id + "-link") {
      switcher = 3;
    }
  });
});

const TabSwitcher = () => {
  switch (switcher) {
    case 1:
      tabs.forEach((element) => element.classList.remove("selected"));
      tabs[0].classList.add("selected");
      content.forEach((element) => {
        element.style.transform = "translateX(0vw)";
      });
      if (window.innerWidth <= 768) {
        about.style.display = "flex";
        project.style.display = "none";
        contact.style.display = "none";
      }
      about.style.opacity = "100%";
      project.style.opacity = "0";
      contact.style.opacity = "0";
      break;
    case 2:
      tabs.forEach((element) => element.classList.remove("selected"));
      tabs[1].classList.add("selected");
      content.forEach((element) => {
        element.style.transform = "translateX(0vw)";
      });
      if (window.innerWidth <= 768) {
        about.style.display = "none";
        project.style.display = "flex";
        contact.style.display = "none";
      }
      about.style.opacity = "0";
      project.style.opacity = "100%";
      contact.style.opacity = "0";
      break;
    case 3:
      tabs.forEach((element) => element.classList.remove("selected"));
      tabs[2].classList.add("selected");
      content.forEach((element) => {
        element.style.transform = "translateX(0vw)";
      });
      if (window.innerWidth <= 768) {
        about.style.display = "none";
        project.style.display = "none";
        contact.style.display = "flex";
      }
      about.style.opacity = "0";
      project.style.opacity = "0";
      contact.style.opacity = "100%";
      break;
    default:
      break;
  }
};

console.log(TabSwitcher);

setInterval(() => {
  TabSwitcher();
}, 1);
