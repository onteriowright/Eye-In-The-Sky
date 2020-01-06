let ChoosePhotoOfTheCollection = [];

export const UseChosenPhoto = () => ChoosePhotoOfTheCollection;

export const choosePhoto = date => {
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=6fhOuvKRWYsgnfBFSjW6dB7SKIelpbVhu70eHHio&date=${date}`
  )
    .then(response => response.json())
    .then(parsedData => {
      ChoosePhotoOfTheCollection = parsedData;
    });
};
