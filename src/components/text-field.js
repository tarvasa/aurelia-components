import { bindable } from "aurelia-framework";

export class TextField {
  @bindable
  label;

  @bindable
  controller;

  @bindable
  required;

  @bindable
  value;

  @bindable
  errorMessage;

  @bindable
  placeholder;

  @bindable
  for;

  @bindable
  firstLetterUpperCase;

  @bindable
  allowOnlyNumbers;

  @bindable
  showClearButton;

  @bindable
  disable;

  @bindable
  hideSuffixContainer = false;

  hasBeenEdited = false;

  activateClearButton = false;

  /**
   * Changes the hasBeenEdited property to true when user writes something into the input element
   * @param {string} newValue the new value of value attribute
   */
  valueChanged(newValue) {
    console.log("newValue: " + newValue, "value: " + this.value);
    if (newValue && this.showClearButton) this.activateClearButton = true;
    else this.activateClearButton = false;
    if (!this.hasBeenEdited && newValue) this.hasBeenEdited = true;
    if (this.firstLetterUpperCase) setTimeout(() => this.toUpperLetter(), 5000);
  }

  toUpperLetter = () => {
    if (
      this.value &&
      this.value[0] !== this.value[0].toUpperCase()
    ) {
      this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    }
  };

  // This function is called by icon container when ?-icon is clicked
  tooltipClicked() {}

  clearButtonClicked() {
    this.value = "";
  }
}
