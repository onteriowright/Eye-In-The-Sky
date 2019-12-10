import {
  getMarsCuriosityPhotos,
  getMarsOpportunityPhotos,
  getMarsSpiritPhotos
} from "./AllMarsPhotosComponents/MarsPhotosDataProvider.js";
import { getMarsPhotoOrVideoOfTheDay } from "./MarsPhotoOrVideoOfTheDayDataProvider/MarsPhotoOrVideoOfTheDayDataProvider.js";
import MarsPhotosListComponent from "./AllMarsPhotosComponents/MarsPhotosListComponent.js";
import MarsPhotoOrVideoOfTheDayListComponent from "./MarsPhotoOrVideoOfTheDayListComponent/MarsPhotoOrVideoOfTheDayListComponent.js";

getMarsCuriosityPhotos().then(MarsPhotosListComponent);
getMarsOpportunityPhotos().then(MarsPhotosListComponent);
getMarsSpiritPhotos().then(MarsPhotosListComponent);
getMarsPhotoOrVideoOfTheDay().then(MarsPhotoOrVideoOfTheDayListComponent);
