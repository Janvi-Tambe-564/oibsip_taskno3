const convertButton = document.getElementById('convert-button');
const temperatureInput = document.getElementById('temperature-input');
const temperatureUnit = document.getElementById('temperature-unit');
const result = document.getElementById('result');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    result.textContent = 'Please enter a valid temperature.';
    return;
  }

  let convertedTemperature;
  if (temperatureUnit.value === 'celsius') {
    convertedTemperature = (temperature * 9/5) + 32;
  } else if (temperatureUnit.value === 'fahrenheit') {
    convertedTemperature = (temperature - 32) * 5/9;
  } else if (temperatureUnit.value === 'kelvin') {
    if (temperatureUnit.value === 'celsius') {
      convertedTemperature = temperature + 273.15;
    } else if (temperatureUnit.value === 'fahrenheit') {
      convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    }
  }

  result.textContent = convertedTemperature + ' ' + temperatureUnit.value;
});