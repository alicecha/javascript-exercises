const convertToCelsius = function(tempF) {
  celsiustemp = (tempF-32)*(5/9);
  //returns value rounded to 1 decimal point
  return parseFloat(celsiustemp.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  fahrtemp = tempC*(9/5)+32;
  //returns value rounded to 1 decimal point
  return parseFloat(fahrtemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
