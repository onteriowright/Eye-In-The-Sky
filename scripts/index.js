import {
  getMarsCuriosityPhotos,
  getMarsOpportunityPhotos,
  getMarsSpiritPhotos
} from "./AllMarsPhotos/MarsPhotoDataProvider.js";
import MarsListComponent from "./AllMarsPhotos/MarsListComponent.js";
import MarsPhotoOfTheDayListComponent from "./MarsPhotoOfTheDay/MarsPhotoOfTheDayListComponent.js";
import { getMarsPhotoOfTheDay } from "./MarsPhotoOfTheDay/MarsPhotoOfTheDayDataProvider.js";

getMarsCuriosityPhotos().then(MarsListComponent);
getMarsOpportunityPhotos().then(MarsListComponent);
getMarsSpiritPhotos().then(MarsListComponent);
getMarsPhotoOfTheDay().then(MarsPhotoOfTheDayListComponent);
