const MarsPhotoOfTheDayComponent = photo => {
  return `
    <section class="mars-photo-of-the-day">
      <h2 class="title-of-the-day">Astronomy Photo Of The Day</h2>
      <h4>Date: ${photo.date}</h4>
      <div>
        <img class="mars-photo-of-the-day-size" src="${photo.hdurl}">
      </div>
      <h3>Title: ${photo.title}</h3>
      <div class="photo-of-the-day-explanation">
        <h3>Explanation For Photo Of The Day:</h3>
        <p>${photo.explanation}</p>
      </div>
    </section>  
    
    `;
};
export default MarsPhotoOfTheDayComponent;
