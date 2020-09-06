class Storage {
  constructor(country) {
    this.country = country;
    this.defaultCountry = "india";
  }

  getCountryName() {
    if (localStorage.getItem("country") === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem("country");
    }

    return {
      country: this.country,
    };
  }

  setCountryName(country) {
    localStorage.setItem("country", country);
  }
}
