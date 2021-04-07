import { inject, bindable } from "aurelia-framework";

export class Combobox {
  @bindable
  label;
  @bindable
  controller;
  @bindable
  required;
  @bindable
  value;
  @bindable
  language;
  @bindable
  errorMessage;
  @bindable
  placeholder;
  @bindable
  for;
  @bindable
  items;
  @bindable
  showClearButton;
  @bindable
  firstLetterUpperCase;
  @bindable
  allowOnlyNumbers;
  @bindable
  disable;
  @bindable
  disableCustomValues;
  @bindable
  customFilter;
  @bindable
  hideSuffixContainer;

  @bindable
  dropDownListOpened = false;

  isAttached = false;

  attached() {
    this.isAttached = true;
    this.initialize();
  }

  initialize() {}

  dropDownListOpenedChanged(newValue) {
    if (newValue) return;
  }

  dropDownListIconClicked() {
    this.dropDownListOpened = !this.dropDownListOpened;
  }

  valueChanged(newValue) {
    console.log("New Value  - combobox ", newValue);
  }
}
