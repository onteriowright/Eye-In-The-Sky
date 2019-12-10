const MarsPhotoOfTheDayComponent = photo => {
  return `
    <section class="photo-of-the-day">
      <div><img class="photo-of-the-day-size" src="${photo.img_src}"></div>
    </section>  
    
    `;
};
export default MarsPhotoOfTheDayComponent;
