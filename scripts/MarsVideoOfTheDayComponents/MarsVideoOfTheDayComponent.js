const MarsVideoOfTheDayComponent = photo => {
  return `
    <section class="photo-of-the-day">
      <div><iframe class="mars-video-of-the-day-size" src="${photo.url}"></iframe></div>
    </section>  
    
    `;
};
export default MarsVideoOfTheDayComponent;
