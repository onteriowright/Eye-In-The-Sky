let marsDataCollection = [];

export const useMarsData = () => marsDataCollection;

export const getMarsCuriosityPhotos = () => {
  return fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=6fhOuvKRWYsgnfBFSjW6dB7SKIelpbVhu70eHHio"
  )
    .then(response => response.json())
    .then(parsedData => {
      marsDataCollection = parsedData;
    });
};
export const getMarsOpportunityPhotos = () => {
  return fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos?sol=1000&api_key=6fhOuvKRWYsgnfBFSjW6dB7SKIelpbVhu70eHHio"
  )
    .then(response => response.json())
    .then(parsedData => {
      marsDataCollection = parsedData;
    });
};
export const getMarsSpiritPhotos = () => {
  return fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/photos?sol=1000&api_key=6fhOuvKRWYsgnfBFSjW6dB7SKIelpbVhu70eHHio"
  )
    .then(response => response.json())
    .then(parsedData => {
      marsDataCollection = parsedData;
    });
};
