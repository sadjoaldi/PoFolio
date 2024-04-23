const projectArea = document.querySelector("#project-area");

// creaction des elements de la page de projet
const ItemCreat = (title, url, image) => {
  // Ajout de  comme argument
  const CardBody = document.createElement("div");
  const webUrl = document.createElement("a");
  const Title = document.createElement("p");
  const Image = document.createElement("img");

  CardBody.classList.add("item");
  webUrl.href = url;
  webUrl.target = "_blank";
  webUrl.appendChild(Image);
  webUrl.addEventListener("mouseover", (e) => show(e.target));
  webUrl.addEventListener("mouseout", () => hide());
  Title.innerText = title;
  Image.src = image;
  Image.ariaLabel = title;
  CardBody.appendChild(webUrl);
  CardBody.appendChild(Title);
  return CardBody;
};

const projList = (Projects) => {
  if (Projects.length > 0) {
    for (let i = 0; i < Projects.length; i++) {
      const item = document.createElement("li");
      item.appendChild(
        ItemCreat(Projects[i].Title, Projects[i].Url, Projects[i].UrlImage)
      );
      projectArea.appendChild(item);
    }
  } else projectArea.innerHTML = "<p> Pas de project disponible </p>";
};

// recuperation des donnees du fichier json projects
fetch("../JSON/projects.json")
  .then((response) => response.json())
  .then((data) => {
    projList(data.Project);
  });
