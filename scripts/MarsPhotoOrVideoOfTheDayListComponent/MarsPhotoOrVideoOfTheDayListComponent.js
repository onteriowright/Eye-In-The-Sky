import MarsPhotoOfTheDayComponent from "../MarsPhotoOfTheDayComponents/MarsPhotoOfTheDayComponent.js";
import MarsVideoOfTheDayComponent from "../MarsVideoOfTheDayComponents/MarsVideoOfTheDayComponent.js";
import { useMarsPhotoOrVideoOfTheDay } from "../MarsPhotoOrVideoOfTheDayDataProvider/MarsPhotoOrVideoOfTheDayDataProvider.js";

const MarsPhotoOrVideoOfTheDayListComponent = () => {
  const photoOfTheDayHTML = document.querySelector("#marsPhotoOfTheDay");
  const useMarsPhotos = useMarsPhotoOrVideoOfTheDay();

  if (useMarsPhotos.media_type === "image") {
    photoOfTheDayHTML.innerHTML = `
    <section class="mars-main">
      <h2>Photo Of The Day</h2>
      <h4>Date: ${useMarsPhotos.date}</h4>
      <div>
        ${MarsPhotoOfTheDayComponent(useMarsPhotos)}
      </div>
      <h4>Copyright: ${useMarsPhotos.copyright}</h4>
      <h3>Title: ${useMarsPhotos.title}</h3>
      <div class="photo-of-the-day-explanation">
        <h3>Explanation For Photo Of The Day:</h3>
        <p>${useMarsPhotos.explanation}</p>
      </div>
    </section>
  `;
  } else if (useMarsPhotos.media_type === "video") {
    photoOfTheDayHTML.innerHTML = `
    <section class="mars-main">
      <h2>Video Of The Day</h2>
      <h4>Date: ${useMarsPhotos.date}</h4>
      <div>
        ${MarsVideoOfTheDayComponent(useMarsPhotos)}
      </div>
      <h4>Title: ${useMarsPhotos.title}</h4>
      <div class="photo-of-the-day-explanation">
        <h3>Explanation For Video Of The Day:</h3>
        <p>${useMarsPhotos.explanation}</p>
      </div>
    </section>
    `;
  }
};

export default MarsPhotoOrVideoOfTheDayListComponent;
