const VideoOfTheDayComponent = photo => {
  return `
    <section class="photoOfTheDay">
      <div><iframe class="photoOfTheDaySize" src="${photo.url}"></iframe></div>
    </section>  
    
    `;
};
export default VideoOfTheDayComponent;
