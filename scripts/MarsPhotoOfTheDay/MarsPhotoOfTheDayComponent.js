const PhotoOfTheDayComponent = photo => {
  return `
    <section class="photoOfTheDay">
      <div><img class="photoOfTheDaySize" src="${photo.img_src}"></div>
    </section>  
    
    `;
};
export default PhotoOfTheDayComponent;
