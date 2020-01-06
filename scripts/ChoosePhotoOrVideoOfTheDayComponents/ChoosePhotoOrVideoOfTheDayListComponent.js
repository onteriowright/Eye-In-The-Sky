import { ChoosePhotoOrVideoOfTheDayComponent } from "./ChoosePhotoOrVideoOfTheDayComponent.js";

export const ChoosePhotoOrVideoOfTheDayListComponent = () => {
  const targetElement = document.querySelector("#choosePhoto");

  targetElement.innerHTML = `
    ${ChoosePhotoOrVideoOfTheDayComponent()}
  `;
};
