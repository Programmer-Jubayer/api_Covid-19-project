// INIT LocalStorage
const store = new Storage();
const countryName = store.getCountryName();
console.log(countryName.country);
// INIT Data Object
const data = new Data(countryName.country);
const obj = data.getData();

// INIT UI object
const ui = new UI();

// Add event Listner for save change
document.querySelector("#change-btn").addEventListener("click", () => {
  const country = document.getElementById("countryName").value;
  ui.changeCountyName();
  // Set Country Name to Local Storage
  store.setCountryName(country);
  // get data from API
  getApiData();
  // Close Modal
  $("#infoModal").modal("hide");
});

// Get Api Data
function getApiData() {
  obj
    .then((response) => {
      response.responseData.forEach((el) => {
        const date = `${document.querySelector("#dateSet").value}T00:00:00Z`;
        if (date === el.Date) {
          ui.addItem(el);
        }
      });
    })
    .catch((err) => {
      if (err) {
        alert("This Data isn't Available in Server");
      }
    });
}
