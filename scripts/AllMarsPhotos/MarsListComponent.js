import MarsComponent from "./MarsComponent.js";
import { useMarsData } from "./MarsPhotoDataProvider.js";

const MarsListComponent = () => {
  const marsHTML = document.querySelector("#mainContainer");
  // const marsPhotoOfTheDay = document.querySelector("#marsPhotoOfTheDay");
  const usePhotos = useMarsData();

  //   marsPhotoOfTheDay.innerHTML = `

  // `;

  marsHTML.innerHTML += `
    <section class="main">
      ${usePhotos.photos
        .map(currentPhoto => MarsComponent(currentPhoto))
        .join("")}
    </section>
  `;
};

export default MarsListComponent;
