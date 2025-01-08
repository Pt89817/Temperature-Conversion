let textbox = document.getElementById("textbox");
let toFahrenheit = document.getElementById("Fahrenheit");
let tocalsius = document.getElementById("celsius");
let result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (tocalsius.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Please select the Button !";
  }
}
