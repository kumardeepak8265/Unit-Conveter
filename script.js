let kiloMeterValue = 1;
let hectoMeterValue = 10;
let decaMeterValue = 100;
let meterMeterValue = 1000;
let gramMeterValue = 1000;
let leterMeterValue = 1000;
let deciMeterValue = 10000;
let centiMeterValue = 100000;
let milliMeterValue = 1000000;
function ConvertUnit() {
  let currentUnit = document.getElementById("currentUnit").value;
  let number = +document.getElementById("number").value;
  let newUnit = document.getElementById("newUnit").value;
  console.log("currentUnit", currentUnit);
  console.log("number", number);
  console.log("newunit", newUnit);
  console.log("button runing");

  if (currentUnit === "kilometer") {
    currentUnit = kiloMeterValue;
  } else if (currentUnit === "hectometer") {
    currentUnit = hectoMeterValue;
  } else if (currentUnit === "decameter") {
    currentUnit = decaMeterValue;
  } else if (currentUnit === "meter") {
    currentUnit = meterMeterValue;
  } else if (currentUnit === "gram") {
    currentUnit = gramValue;
  } else if (currentUnit === "leter") {
    currentUnit = leterValue;
  } else if (currentUnit === "decimeter") {
    currentUnit = deciMeterValue;
  } else if (currentUnit === "centimeter") {
    currentUnit = centiMeterValue;
  } else if (currentUnit === "millimeter") {
    currentUnit = milliMeterValue;
  }

  if (newUnit === "kilometer") {
    newUnit = kiloMeterValue;
  } else if (newUnit === "hectometer") {
    newUnit = hectoMeterValue;
  } else if (newUnit === "decameter") {
    newUnit = decaMeterValue;
  } else if (newUnit === "meter") {
    newUnit = meterMeterValue;
  } else if (newUnit === "gram") {
    newUnit = gramValue;
  } else if (newUnit === "leter") {
    newUnit = leterValue;
  } else if (newUnit === "decimeter") {
    newUnit = deciMeterValue;
  } else if (newUnit === "centimeter") {
    newUnit = centiMeterValue;
  } else if (newUnit === "millimeter") {
    newUnit = milliMeterValue;
  }

  const result = (newUnit / currentUnit) * number;
  document.getElementById("data").innerHTML = `convert value =${result}`;
}
