import { inject, bindable } from "aurelia-framework";

export class Checkbox {
  @bindable
  name;

  @bindable
  value;

  isAttached = false;

  attached() {
    this.isAttached = true;
    this.initialize();
  }

  initialize = () => {
    this.checkboxInput.addEventListener("change", () => {
      this.value = this.checkboxInput.checked;
    });
  };
}
