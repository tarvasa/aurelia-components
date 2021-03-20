import {bindable} from "aurelia-framework";


export class TextField {


  @bindable
  label = "Tekstikenttä";

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
  empty;

  @bindable
  autoTrim;

  @bindable
  firstLetterUpperCase;

  @bindable
  allowOnlyNumbers;

  @bindable
  showClearButton;

  @bindable
  disable

  @bindable
  hideSuffixContainer;
  
}
