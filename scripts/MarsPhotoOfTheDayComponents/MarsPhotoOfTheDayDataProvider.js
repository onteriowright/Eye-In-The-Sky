let marsPhotoOrVideoOfTheDayDataCollection = [];

export const useMarsPhotoOfTheDay = () =>
  marsPhotoOrVideoOfTheDayDataCollection;

export const getMarsPhotoOfTheDay = () => {
  return fetch(
    "https://api.nasa.gov/planetary/apod?api_key=6fhOuvKRWYsgnfBFSjW6dB7SKIelpbVhu70eHHio"
  )
    .then(response => response.json())
    .then(parsedData => {
      marsPhotoOrVideoOfTheDayDataCollection = parsedData;
    });
};
