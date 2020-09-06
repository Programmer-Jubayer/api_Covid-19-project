class Data {
  constructor(country) {
    this.country = country;
  }
  async getData() {
    const response = await fetch(
      `https://api.covid19api.com/total/dayone/country/${this.country}`
    );
    const responseData = await response.json();
    return {
      responseData,
    };
  }
}
