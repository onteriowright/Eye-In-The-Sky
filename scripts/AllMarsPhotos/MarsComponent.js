const MarsComponent = photo => {
  return `
    <section class="mars-component">
    <div><img class="size-of-picture" src="${photo.img_src}"></div>
    <div>Probe Name: ${photo.rover.name}</div>
    <div>Earth Date: ${new Date(photo.earth_date).toLocaleDateString()}</div>
    <div>Camera Name: ${photo.camera.name}</div>
    </section>
  `;
};

export default MarsComponent;
