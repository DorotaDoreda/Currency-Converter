{
  console.log("Cześć!");




  const calculateResult = (amount, currency) => {
    const rateEUR = 4.554;
    const rateUSD = 3.763;
    const rateGBP = 5.232;
    switch (currency) {
      case "EUR":
        return amount / rateEUR;


      case "USD":
        return amount / rateUSD;


      case "GBP":
        return amount / rateGBP;


    }

  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");


    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency);


    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;


  };
  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);




  };
  init();



}