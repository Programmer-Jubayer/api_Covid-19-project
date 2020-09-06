class UI {
  constructor() {
    this.defaultCountryName = "Bangladesh";
    this.defaultDate = "Date";
    this.country = document.querySelector("#countryName");
    this.countryName = document.querySelector("#country-name");
    this.confirm = document.querySelector("#confirm");
    this.death = document.querySelector("#death");
    this.recover = document.querySelector("#recover");
    this.active = document.querySelector("#active");
    this.date = document.querySelector("#date");
    this.inputDate = document.querySelector("#dateSet");

    this.countryName.textContent = this.defaultCountryName;
    this.date.textContent = this.defaultDate;
  }

  changeCountyName() {
    this.countryName.textContent = this.country.value;
  }

  addItem(data) {
    this.confirm.textContent = `Total Confirmed: ${data.Confirmed}`;
    this.death.textContent = `Total Deaths: ${data.Deaths}`;
    this.recover.textContent = `Total Recovered: ${data.Recovered}`;
    this.active.textContent = `Total Active: ${data.Active}`;
    this.country.textContent = `${data.Country}`;
    ui.dateObj(data);
  }

  dateObj(data) {
    const newDate = `${data.Date}`;
    const dateArr = newDate.split("T");
    this.date.textContent = dateArr[0];
  }
}
