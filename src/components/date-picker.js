import { bindable } from "aurelia-framework";

export class DatePicker {
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
  showClearButton;

  @bindable
  disable;

  calendarButtonClicked = (event) => {};
}
