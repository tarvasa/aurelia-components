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
  currentMonthYear = this.formatMonthYear(this.date);

  daysOfMonth;
  //monthDays = this.populateDates();

  attached() {
    this.isAttached = true;
    this.calendarButton.addEventListener('click', this.calendarButtonClicked);
    this.nextMonthArrow.addEventListener('click', this.goToNextMonth);
    this.prevMonthArrow.addEventListener('click', this.goToPrevMonth);
  }

  calendarButtonClicked = (event) => {
    this.visible = true;
    this.populateDates();
    //console.log(this.daysOfMonth);
  };

  goToNextMonth = (e) => {
    this.month++;
    if(this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.currentMonthYear = this.months[this.month] + ' ' + this.year;
    this.populateDates();
  }

  goToPrevMonth = (e) => {
    this.month--;
    if(this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.currentMonthYear = this.months[this.month] + ' ' + this.year;
    this.populateDates();
  }

  populateDates(e) {
    this.daysOfMonth = new Set();
    let amount_days = 31;
    if(this.month === 1) {
      amount_days = 28;
    }

    for(let i = 0; i < amount_days; i++) {
      this.daysOfMonth.add(i + 1);
    }

  }

  formatMonthYear(d) {
    this.month = d.getMonth();

    this.year = d.getFullYear();

    return this.months[this.month] + ' ' + this.year;
  }

  formatDate(d) {
    this.day = d.getDate();
    if(this.day < 10 ) {
      this.day = '0' + this.day;
    }

    this.month = d.getMonth() + 1;
    if(this.month < 10 ) {
      this.month = '0' + this.month;
    }

    this.year = d.getFullYear();

    return this.day + ' / ' + this.month + ' / ' + this.year;
  }

}
