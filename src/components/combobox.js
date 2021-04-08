import { inject, bindable } from "aurelia-framework";
import $ from "jquery";

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
  /**
   * Function with following parameters
   * @param {number} pageNumber page number (=index)
   * @param {number} pageSize number of items fetched at a time from the dataprovider.
   * @param {string} filter filter
   */
  @bindable
  dataProvider;
  @bindable
  disable;
  @bindable
  disableCustomValues;
  /**
   * Function with following parameters
   * @param {string} filter filter
   * @param {Array} items items to be filtered
   */
  @bindable
  customFilter;
  @bindable
  hideSuffixContainer;
  @bindable
  dropDownListOpened = false;

  isAttached = false;
  _items_are_valid = false;
  _combobox_items = [];
  _pageSize = 50;
  _maxItemSize;

  attached() {
    this.isAttached = true;
    this.initialize();
  }

  initialize() {
    // Listener for closing the drop down list when anything outside of it is clicked
    document.body.addEventListener("mouseup", (e) => {
      if (
        typeof e.target.className === "string" &&
        e.target.className.includes("text-field__input-element")
      ) {
        if (!this.dropDownListOpened) this.dropDownListOpened = true;
      }
      if (this.dropDownListOpened === false) return;
      if (
        !$(this.dropDownListContainer.className).is(e.target) &&
        $(this.dropDownListContainer).has(e.target).length === 0 &&
        $(this.comboboxTextField).has(e.target).length === 0
      ) {
        this.dropDownListOpened = false;
      }
    });
  }

  itemSelected(newValue) {
    this.value = newValue;
    this.dropDownListOpened = false;
  }

  dropDownListOpenedChanged(newValue) {
    if (newValue) return;
  }

  dropDownListIconClicked() {
    this.dropDownListOpened = true;
  }

  valueChanged(newValue, oldValue) {
    // Open drop down list when value is not empty
    if (oldValue && newValue.length === 1) this.dropDownListOpened = true;
    // Routing filtering
    this.applyFiltering();
  }

  // async fetchItems() {
  //   if (this.dataProvider[Symbol.toStringTag] === "AsyncFunction") {
  //     let nextPageNumber = Math.floor(this._combobox_items / this._pageSize);
  //     if (
  //       this._numberOfItems &&
  //       this._combobox_items.length === this._numberOfItems
  //     )
  //       return;
  //     let [items, numberOfItems] = await this.dataProvider(
  //       nextPageNumber,
  //       this._pageSize,
  //       this.value
  //     );
  //     this._numberOfItems = numberOfItems;
  //     if (
  //       !Array.isArray(items) ||
  //       items.length === 0 ||
  //       !this.isReturnedItemsValid(items)
  //     ) {
  //       this._combobox_items = [];
  //       return;
  //     }
  //     if (nextPageNumber === 0)
  //       this._combobox_items = Array(numberOfItems).fill("");
  //     let nextEmptyIndex = this._combobox_items.indexOf("");
  //     this._combobox_items = this._combobox_items
  //       .splice(0, nextEmptyIndex)
  //       .append(items)
  //       .append(
  //         this._combobox_items.splice(
  //           nextEmptyIndex + items.length,
  //           this._combobox_items.length + 1
  //         )
  //       );
  //   }
  // }

  itemsChanged(newValue) {
    this.checkItemsValidity(newValue);
    if (this._items_are_valid) {
      this.applyFiltering();
    }
  }

  applyFiltering() {
    if (!this.customFilter) this.applyDefaultFiltering();
    else this.applyCustomFiltering();
  }

  applyDefaultFiltering() {
    if (this.value && this._items_are_valid) {
      let tempValidItems = [];
      this.items.forEach((e) => {
        if (e.toLowerCase().includes(this.value.toLowerCase()))
          tempValidItems.push(e);
      });
      this._combobox_items = tempValidItems;
    } else if (this._items_are_valid) {
      this._combobox_items = this.items;
    }
  }

  applyCustomFiltering() {
    if (this._items_are_valid) {
      let customFilterItems = this.customFilter(this.value, this.items);
      if (
        customFilterItems &&
        Array.isArray(customFilterItems) &&
        this.isReturnedItemsValid(customFilterItems)
      ) {
        this._combobox_items = customFilterItems;
      } else {
        this._combobox_items = [];
      }
    }
  }

  /**
   * VALIDATION FUNCTIONS
   */

  checkItemsValidity(newItems) {
    if (Array.isArray(newItems)) {
      this._items_are_valid = !newItems.some((e) => typeof e !== "string");
    } else this._items_are_valid = false;
  }

  isReturnedItemsValid(customFilterItems) {
    if (Array.isArray(customFilterItems)) {
      return !customFilterItems.some((e) => typeof e !== "string");
    } else return false;
  }
}
