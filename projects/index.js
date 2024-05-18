// currency-codes.js
const currencies = [
  "USD",
  "EUR",
  "GBP",
  "INR",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "JPY",
];
// api-key.js
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
// script.js
const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// Create dropdown options from the currencies array
const populateDropdowns = () => {
  currencies.forEach((currency) => {
    const fromOption = document.createElement("option");
    fromOption.value = currency;
    fromOption.text = currency;
    fromDropDown.add(fromOption);

    const toOption = document.createElement("option");
    toOption.value = currency;
    toOption.text = currency;
    toDropDown.add(toOption);
  });

  // Set default values
  fromDropDown.value = "USD";
  toDropDown.value = "INR";
};

const convertCurrency = () => {
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  if (amount.length !== 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        const fromExchangeRate = data.conversion_rates[fromCurrency];
        const toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        document.getElementById(
          "result"
        ).innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      })
      .catch((error) => {
        console.error("Error fetching exchange rate data:", error);
        alert(
          "There was an error fetching exchange rate data. Please try again later."
        );
      });
  } else {
    alert("Please fill in the amount");
  }
};

document
  .querySelector("#convert-button")
  .addEventListener("click", convertCurrency);
window.addEventListener("load", () => {
  populateDropdowns();
  convertCurrency(); // Optional: Convert on page load with default values
});
