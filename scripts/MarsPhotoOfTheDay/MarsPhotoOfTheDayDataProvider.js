let marsDataCollection = [];

export const useMarsPhotoOfTheDay = () => marsDataCollection;

export const getMarsPhotoOfTheDay = () => {
  return fetch(
    "https://api.nasa.gov/planetary/apod?api_key=6fhOuvKRWYsgnfBFSjW6dB7SKIelpbVhu70eHHio"
  )
    .then(response => response.json())
    .then(parsedData => {
      console.log(parsedData);
      marsDataCollection = parsedData;
    });
};
