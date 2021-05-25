console.log("Cześć!");

let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let rateEUR = 4.554;
  let rateUSD = 3.763;
  let rateGBP = 5.232;

  let amount = +amountElement.value;
  let currency = currencyElement.value;
  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;

    case "USD":
      result = amount / rateUSD;
      break;

    case "GBP":
      result = amount / rateGBP;
      break;

  }
  resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;

 


});
