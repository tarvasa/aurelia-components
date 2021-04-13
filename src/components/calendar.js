import { inject, bindable } from 'aurelia-framework';
import { $dataMetaSchema } from '../../../../Users/saana/AppData/Local/Microsoft/TypeScript/4.2/node_modules/ajv/lib/ajv';
import { months } from '../../node_modules/moment/moment';

export class Calendar {
  @bindable
  name;

  @bindable
  checked;

  @bindable
  errorMessage;

  isAttached = false;

  @bindable
  openDates;

  @bindable
  visible;

  active = false;

  months = [ 'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'];
  
  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth();
  year = this.date.getFullYear();

  selectedDate = this.date;
  selectedDay = this.day;
  selectedMonth = this.month;
  selectedYear = this.year;

  currentMonthYear = this.months[this.month] + ' ' + this.year;


  attached() {
    this.isAttached = true;
    this.calendarButton.addEventListener('click', this.calendarButtonClicked);
    this.nextMonthArrow.addEventListener('click', this.goToNextMonth);
    this.prevMonthArrow.addEventListener('click', this.goToPrevMonth);
  }

  calendarButtonClicked = (event) => {
    console.log('test');
    this.visible = true;
  };

  goToNextMonth = (e) => {
    this.month++;
    if(this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.currentMonthYear = this.months[this.month] + ' ' + this.year;
  }

  goToPrevMonth = (e) => {
    this.month--;
    if(this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.currentMonthYear = this.months[this.month] + ' ' + this.year;
  }
}
