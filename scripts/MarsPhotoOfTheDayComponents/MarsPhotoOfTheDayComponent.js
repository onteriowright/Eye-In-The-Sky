const MarsPhotoOfTheDayComponent = photo => {
  return `
    <section class="mars-photo-of-the-day">
      <div><img class="mars-photo-of-the-day-size" src="${photo.hdurl}"></div>
    </section>  
    
    `;
};
export default MarsPhotoOfTheDayComponent;
