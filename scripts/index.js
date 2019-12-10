import {
  getMarsCuriosityPhotos,
  getMarsOpportunityPhotos,
  getMarsSpiritPhotos
} from "./AllMarsPhotosComponents/MarsPhotosDataProvider.js";
import { getMarsPhotoOfTheDay } from "./MarsPhotoOfTheDayComponents/MarsPhotoOfTheDayDataProvider.js";
import MarsPhotosListComponent from "./AllMarsPhotosComponents/MarsPhotosListComponent.js";
import MarsPhotoOfTheDayListComponent from "./MarsPhotoOfTheDayComponents/MarsPhotoOfTheDayListComponent.js";

getMarsCuriosityPhotos().then(MarsPhotosListComponent);
getMarsOpportunityPhotos().then(MarsPhotosListComponent);
getMarsSpiritPhotos().then(MarsPhotosListComponent);
getMarsPhotoOfTheDay().then(MarsPhotoOfTheDayListComponent);
