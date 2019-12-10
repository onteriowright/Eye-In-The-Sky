let marsPhotoOrVideoOfTheDayDataCollection = [];

export const useMarsPhotoOrVideoOfTheDay = () =>
  marsPhotoOrVideoOfTheDayDataCollection;

export const getMarsPhotoOrVideoOfTheDay = () => {
  return fetch(
    "https://api.nasa.gov/planetary/apod?api_key=6fhOuvKRWYsgnfBFSjW6dB7SKIelpbVhu70eHHio"
  )
    .then(response => response.json())
    .then(parsedData => {
      marsPhotoOrVideoOfTheDayDataCollection = parsedData;
    });
};
