fetch("../JSON/language.json")
  .then((response) => response.json())
  .then((data) => {
    language = data;
    console.log(language);

    const langIcon = document.querySelector("#iconLang");
    const icon = document.querySelector("#iconMode");
    const brand = document.querySelector(".brand");
    let src;

    // pour changer le mode de la page
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        brand.src = src = "../images/brand/Alhassane_Diallo.png";
        icon.src = "../images/icons/imoon.png";
      } else {
        brand.src = src = "../images/brand/alhassane_diallolog.png";
        icon.src = src = "../images/icons/isun.png";
      }
    });

    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "fr");
    }

    langIcon.textContent = localStorage.getItem("language").toUpperCase();

    // fonction pour mettre à jour le contenu de la page
    const UpdtaResume = (content) => {
      const aboutSection = document.querySelector("#about .description");

      for (let i = 0; i < aboutSection.childNodes.length; i++) {
        if (i % 2 === 1) {
          aboutSection.childNodes[i].innerHTML = content[i];
        }
      }
    };

    // fonction pour mettre à jour les onglets de la page
    const UpdateTabs = (about, project, contact) => {
      document.querySelector("#about-link").innerText = about;
      document.querySelector("#project-link").innerText = project;
      document.querySelector("#contact-link").innerText = contact;
    };

    // fonction pour mettre à jour le contenu de la page contact
    const UpdateContact = (text, btnText) => {
      document.querySelector("#contact").childNodes[1].innerText = text;
      document
        .querySelectorAll("#btn a")
        .forEach((button) => (button.innerText = btnText));
    };

    // fonction pour changer la langue de la page
    const ChangeLanguage = (selectedLanguage) => {
      const textArray = [];
      const languageRole = language.language.find(
        (item) => item.Role.toLowerCase() === selectedLanguage
      );

      if (languageRole) {
        const { SectionAbout, SectionContact } = languageRole.content;

        if (SectionAbout && SectionAbout.Resume) {
          const aboutContentResume = SectionAbout.Resume.split("*");
          for (let i = 0; i < aboutContentResume.length; i++) {
            textArray.push(null);
            textArray.push(aboutContentResume[i]);
          }
        }

        const { About, Project, Contact } = languageRole.content.Tabs;
        UpdateTabs(About, Project, Contact);
        UpdtaResume(textArray);

        if (
          SectionContact &&
          SectionContact.Message &&
          SectionContact.ButtonText
        ) {
          UpdateContact(SectionContact.Message, SectionContact.ButtonText);
        }
      }
    };

    langIcon.addEventListener("click", () => {
      const currentLanguage = localStorage.getItem("language");
      const newLanguage = currentLanguage === "fr" ? "en" : "fr";

      localStorage.setItem("language", newLanguage);
      langIcon.textContent = newLanguage.toUpperCase();
      ChangeLanguage(newLanguage);
    });

    ChangeLanguage(localStorage.getItem("language"));
  });
