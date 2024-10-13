import { ProgressBar } from "./ProgressBar";
const barknob = document.getElementById("progressbars");
const myRedBar = new ProgressBar("red");
barknob.appendChild(myRedBar.element);
const myGreenBar = new ProgressBar("green");
barknob.appendChild(myGreenBar.element);
const myBlueBar = new ProgressBar("blue");
barknob.appendChild(myBlueBar.element);

const colorBtn = document.querySelector(".changeColorButton");
colorBtn.addEventListener("click", () => {
  const redValue = myRedBar.value * 15;
  const greenValue = myGreenBar.value * 15;
  const blueValue = myBlueBar.value * 15;
  const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  colorBtn.style.backgroundColor = color;
});
