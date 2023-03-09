const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

const roundToTwoDP = (num) => 
{
  return num.toFixed(2);
}


const celsiusToFa = () =>
 {
  const celsiusTemp = parseFloat(celsiusInput.value);
  const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
  fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
}


const fahrenheitToCe = () =>
 {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  celsiusInput.value = roundToTwoDP(celsiusTemp);
}

const main = () => 
{
  celsiusInput.addEventListener('input', celsiusToFa);
  fahrenheitInput.addEventListener('input', fahrenheitToCe);
}

main();