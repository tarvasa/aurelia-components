import {bindable} from "aurelia-framework";


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
  valid;

  @bindable
  placeholder;

  @bindable
  for;

  @bindable
  autoTrim;

  @bindable
  firstLetterUpperCase;

  @bindable
  allowOnlyNumbers;

  @bindable
  showClearButton;

  @bindable
  disable;

  hasBeenEdited = false;

  attached(){

  }

  /**
   * Changes hasBeenEdited property to true when user writes something into the input element
   * @param {string} newValue the new value of value attribute
   */
  valueChanged(newValue) {
    if(!this.hasBeenEdited && newValue) this.hasBeenEdited = true;
    if((this.firstLetterUpperCase === "true" || this.firstLetterUpperCase === true) && this.value[0] !== this.value[0].toUpperCase()) {
      this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    }
  }

  disableChanged(newValue) {
    if(!this.textFieldInputElement) return;
    if(newValue === "true" || newValue === true) this.textFieldInputElement.disabled = true;
    else this.textFieldInputElement.disabled = false;
  }

  /**
   * This function is called by icon container when ?-icon is clicked
   */
  tooltipClicked() {
    console.log("Tooltip clicked!");
  }

  clearButtonClicked() {
    this.value = "";
  }


  
}
