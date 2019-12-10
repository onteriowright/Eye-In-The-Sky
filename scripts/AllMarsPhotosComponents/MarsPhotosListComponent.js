import { useMarsPhotosData } from "./MarsPhotosDataProvider.js";
import MarsPhotosComponent from "./MarsPhotosComponent.js";

const MarsPhotosListComponent = () => {
  const marsHTML = document.querySelector("#mainContainer");
  const useMarsPhotos = useMarsPhotosData();

  marsHTML.innerHTML += `
    <section class="main">
      ${useMarsPhotos.photos
        .map(currentMarsPhoto => MarsPhotosComponent(currentMarsPhoto))
        .join("")}
    </section>
  `;
};

export default MarsPhotosListComponent;
