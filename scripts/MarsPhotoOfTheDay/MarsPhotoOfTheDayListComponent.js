import PhotoOfTheDayComponent from "./MarsPhotoOfTheDayComponent.js";
import VideoOfTheDayComponent from "./VideoOfTheDayComponent.js";
import { useMarsPhotoOfTheDay } from "./MarsPhotoOfTheDayDataProvider.js";

const MarsPhotoOfTheDayListComponent = () => {
  const photoOfTheDayHTML = document.querySelector("#marsPhotoOfTheDay");
  const useMarsPhotos = useMarsPhotoOfTheDay();

  if (useMarsPhotos.media_type === "image") {
    photoOfTheDayHTML.innerHTML = `
    <section class="mars-main">
    ${PhotoOfTheDayComponent(useMarsPhotos)}
    </section>
  `;
  } else if (useMarsPhotos.media_type === "video") {
    photoOfTheDayHTML.innerHTML = `
    <section class="mars-main">
    ${VideoOfTheDayComponent(useMarsPhotos)}
    </section>
    `;
  }
};

export default MarsPhotoOfTheDayListComponent;
