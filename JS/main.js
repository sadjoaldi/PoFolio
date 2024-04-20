const container = document.querySelector(".container");
const brand = document.querySelector(".brand img");
const brand_background = document.querySelector(".brand");
const info = document.querySelector(".ADinformation");
const tabs = document.querySelectorAll(".tabs");
const content = document.querySelector(".content");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const btn = document.querySelector("#btn");
let links = document.querySelector(".ADinformation header ul li");
let src = brand.src;

// Création d'un élément p pour la description (voir la fonction pour l'affichage de texte plustard)
const brandDescription = document.createElement("p");
brandDescription.style.display = "none";
brand.parentNode.appendChild(brandDescription);

function show(img, description) {
  brand.style.width = "100%";
  brand.style.transform = "scaleX(0px) scaleY(0px) scaleZ(0px)";
  brand.style.opacity = "0";

  setTimeout(() => {
    brand.src = img.src;
    brandDescription.textContent = description;
    brandDescription.style.display = "block";
    brand.style.transform = "scaleX(20px) scaleY(100px) scaleZ(-30px)";
    brand.style.opacity = "100%";
  }, 1000);
}

function hide() {
  brand.style.width = "50%";
  brand.style.opacity = "0";

  setTimeout(() => {
    brand.src = src;
    brandDescription.style.display = "none"; // Cachez l'élément p
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
    } else if (element.id === projects.id + "-link") {
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
      content[0].style.transform = "translateX(0)";
      if (window.innerWidth <= 768) {
        about.style.display = "flex";
        projects.style.display = "none";
        contact.style.display = "none";
      }
      about.style.opacity = "100%";
      projects.style.opacity = "0";
      contact.style.opacity = "0";
      break;
    case 2:
      tabs.forEach((element) => element.classList.remove("selected"));
      tabs[1].classList.add("selected");
      content[1].style.transform = "translateX(0vw)";
      if (window.innerWidth <= 768) {
        about.style.display = "none";
        projects.style.display = "flex";
        contact.style.display = "none";
      }
      about.style.opacity = "0";
      projects.style.opacity = "100%";
      contact.style.opacity = "0";
      break;
    case 3:
      tabs.forEach((element) => element.classList.remove("selected"));
      tabs[2].classList.add("selected");
      content[2].style.transform = "translateX(0vw)";
      if (window.innerWidth <= 768) {
        about.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "flex";
      }
      about.style.opacity = "0";
      projects.style.opacity = "0";
      contact.style.opacity = "100%";
      break;
    default:
      break;
  }
};

setInterval(() => {
  TabSwitcher();
}, 5000);
