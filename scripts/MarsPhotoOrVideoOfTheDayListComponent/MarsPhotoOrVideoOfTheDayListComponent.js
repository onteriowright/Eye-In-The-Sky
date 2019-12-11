import MarsPhotoOfTheDayComponent from "../MarsPhotoOfTheDayComponents/MarsPhotoOfTheDayComponent.js";
import MarsVideoOfTheDayComponent from "../MarsVideoOfTheDayComponents/MarsVideoOfTheDayComponent.js";
import { useMarsPhotoOrVideoOfTheDay } from "../MarsPhotoOrVideoOfTheDayDataProvider/MarsPhotoOrVideoOfTheDayDataProvider.js";

const MarsPhotoOrVideoOfTheDayListComponent = () => {
  const photoOfTheDayHTML = document.querySelector("#marsPhotoOfTheDay");
  const useMarsPhotos = useMarsPhotoOrVideoOfTheDay();

  if (useMarsPhotos.media_type === "image") {
    photoOfTheDayHTML.innerHTML = `
    <section class="mars-main">
      <div>
        ${MarsPhotoOfTheDayComponent(useMarsPhotos)}
      </div>
    </section>
  `;
  } else if (useMarsPhotos.media_type === "video") {
    photoOfTheDayHTML.innerHTML = `
    <section class="mars-main">
      <div>
        ${MarsVideoOfTheDayComponent(useMarsPhotos)}
      </div>
    </section>
    `;
  }
};

export default MarsPhotoOrVideoOfTheDayListComponent;
