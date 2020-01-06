import {
  choosePhoto,
  UseChosenPhoto
} from "./ChoosePhotoOrVideoOfTheDayDataProvider.js";
import MarsPhotoOfTheDayComponent from "../MarsPhotoOfTheDayComponents/MarsPhotoOfTheDayComponent.js";
import MarsVideoOfTheDayComponent from "../MarsVideoOfTheDayComponents/MarsVideoOfTheDayComponent.js";

export const DisplayChoosenPhotoOrVideoOfTheDayListComponent = () => {
  const eventHub = document.querySelector("#main");
  const targetElement = document.querySelector("#marsPhotoOfTheDay");

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showPhoto") {
      const currentDate = document.querySelector("#chooseDate").value;
      choosePhoto(currentDate).then(() => {
        const useChosenPhoto = UseChosenPhoto();
        if (useChosenPhoto.media_type === "image") {
          targetElement.innerHTML = `
          <section class="mars-main">
            <div>
              ${MarsPhotoOfTheDayComponent(useChosenPhoto)}
            </div>
          </section>
        `;
        } else if (useChosenPhoto.media_type === "video") {
          targetElement.innerHTML = `
          <section class="mars-main">
            <div>
              ${MarsVideoOfTheDayComponent(useChosenPhoto)}
            </div> 
          </section>
          `;
        }
      });
    }
  });
};
