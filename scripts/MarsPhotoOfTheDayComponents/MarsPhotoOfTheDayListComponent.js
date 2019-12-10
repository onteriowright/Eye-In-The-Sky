import MarsPhotoOfTheDayComponent from "./MarsPhotoOfTheDayComponent.js";
import MarsVideoOfTheDayComponent from "../MarsVideoOfTheDayComponents/MarsVideoOfTheDayComponent.js";
import { useMarsPhotoOfTheDay } from "./MarsPhotoOfTheDayDataProvider.js";

const MarsPhotoOfTheDayListComponent = () => {
  const photoOfTheDayHTML = document.querySelector("#marsPhotoOfTheDay");
  const useMarsPhotos = useMarsPhotoOfTheDay();

  if (useMarsPhotos.media_type === "image") {
    photoOfTheDayHTML.innerHTML = `
    <section class="mars-main">
      <h2>Photo Of The Day</h2>
      <h4>Date: ${useMarsPhotos.date}</h4>
      <div>${MarsPhotoOfTheDayComponent(useMarsPhotos)}</div>
      <h4>Title: ${useMarsPhotos.title}</h4>
      <p class="photo-of-the-day-explanation">
        <h3>Explanation For Photo Of The Day:</h3>
        <div>${useMarsPhotos.explanation}</div>
      </p>
    </section>
  `;
  } else if (useMarsPhotos.media_type === "video") {
    photoOfTheDayHTML.innerHTML = `
    <section class="mars-main">
      <h2>Video Of The Day</h2>
      <h4>Date: ${useMarsPhotos.date}</h4>
      <div>${MarsVideoOfTheDayComponent(useMarsPhotos)}</div>
      <h4>Title: ${useMarsPhotos.title}</h4>
      <p class="photo-of-the-day-explanation">
        <h3>Explanation For Video Of The Day:</h3>
        <div>${useMarsPhotos.explanation}</div>
      </p>
    </section>
    `;
  }
};

export default MarsPhotoOfTheDayListComponent;
