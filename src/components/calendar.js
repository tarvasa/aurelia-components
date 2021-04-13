import { inject, bindable } from 'aurelia-framework';

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

  dateSelected = this.formatDate(this.date);
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

  formatDate(d) {
    this.day = d.getDate();

    this.month = d.getMonth() + 1;

    this.year = d.getFullYear();

    return this.day + ' / ' + this.month + ' / ' + this.year;
  }

}
