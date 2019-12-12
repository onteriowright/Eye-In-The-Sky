const MarsPhotosComponent = photo => {
  return `
    <section class="mars-component">
    <div><img class="size-of-mars-picture-cards" src="${photo.img_src}"></div>
    <div class="photo-info">Probe Name: ${photo.rover.name}</div>
    <div class="photo-info">Earth Date: ${new Date(photo.earth_date).toLocaleDateString()}</div>
    <div class="photo-info">Camera Name: ${photo.camera.name}</div>
    </section>
  `;
};

export default MarsPhotosComponent;
