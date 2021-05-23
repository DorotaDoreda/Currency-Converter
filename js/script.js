console.log("Cześć!");

let euroElement = document.querySelector(".js-euro");
let usdElement = document.querySelector(".js-usd");
let gbpElement = document.querySelector(".js-gbp");
let formElement = document.querySelector(".js-form");
let plnValue = document.querySelector(".js-pln");
let amount = document.querySelector(".js-value");
let buttonReset = document.querySelector(".form__button--reset")

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  switch (true) {
    case euroElement.checked:
      pln = amount.value * 4.55;
      plnValue.innerText = `${pln.toFixed(2)} zł`;
      break;
    case usdElement.checked:
      pln = amount.value * 3.76;
      plnValue.innerText = `${pln.toFixed(2)} zł`;
      break;
    case gbpElement.checked:
      pln = amount.value * 5.23;
      plnValue.innerText = `${pln.toFixed(2)} zł`;
      break;
  }
});