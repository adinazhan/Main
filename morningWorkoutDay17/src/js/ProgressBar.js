// import { Logger, Value } from "sass";

export class ProgressBar {
  constructor(color, maxValue = 17, gradient = 1) {
    this.color = color;
    this.value = 0;
    this.maxValue = maxValue;
    this.gradient = gradient;
    this.element = document.createElement("div");
    this.element.className = "progress-bar";
    this.refreshElement();
  }

  refreshElement() {
    this.element.innerHTML = `
      <div class="label">
        ${this.value}/${this.maxValue}
      </div>
      <div class="progress">
         <div class="btn-minus"></div>
         <div class="bar">
           <div style="width: ${
             (this.value / this.maxValue) * 100
           }% ;background-color: ${this.color}" class="knob"></div>
         </div>
         <div class="btn-plus"></div>
      </div>
    `;

    const plusBtn = this.element.querySelector(".btn-plus");
    plusBtn.addEventListener("click", () => {
      this.value = Math.min(this.maxValue, this.value + this.gradient);
      this.refreshElement();
    });

    const minusBtn = this.element.querySelector(".btn-minus");
    minusBtn.addEventListener("click", () => {
      if (this.value > 0) {
        this.value = this.value - this.gradient;
        this.refreshElement();

        //...or like the below
        //    plusBtn.addEventListener("click", () => {
        // this.value = Math.max(0, this.value - this.gradient);
        // this.refreshElement();
        // }
      }
    });
  }
}
