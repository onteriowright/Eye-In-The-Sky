const MarsVideoOfTheDayComponent = video => {
  return `
    <section class="photo-of-the-day">
    <h2>Video Of The Day</h2>
      <h4>Date: ${video.date}</h4>
      <div>
        <iframe class="mars-video-of-the-day-size" src="${video.url}"></iframe>
      </div>
      <h4>Title: ${video.title}</h4>
      <div class="photo-of-the-day-explanation">
        <h3>Explanation For Video Of The Day:</h3>
        <p>${video.explanation}</p>
      </div>
    </section>  
    
    `;
};
export default MarsVideoOfTheDayComponent;
