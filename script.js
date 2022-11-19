let kiloMeterValue = 1;
let hectoMeterValue = 10;
let decaMeterValue = 100;
let meterMeterValue = 1000;
let gramMeterValue = 1000;
let leterMeterValue = 1000;
let deciMeterValue = 10000;
let centiMeterValue = 100000;
let milliMeterValue = 1000000;

let number;
let currentUnit;
let newUnit;
for (let i = 0; i < 3; i++) {
  if (i === 0) {
    number = prompt("enter number");
  }
  if (number === null) {
    i--;
    break;
  } else if (number === "") {
    i--;
    continue;
  } else if (isNaN(number)) {
    alert("please enter the valid number");
    i--;
    continue;
  } else if (i === 1) {
    currentUnit = prompt("current unit");
    if (currentUnit === null) {
      break;
    }
  } else if (i === 2) {
    newUnit = prompt("newunnit");
    if (newUnit === null) {
      i--;
      break;
    }
  }
}
console.log("number bharwala", number);
console.log("currentunit bharwala", currentUnit);
console.log("newunit bharwala", newUnit);

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

console.log("currentunit bharwala", currentUnit);
console.log("newunit bharwala", newUnit);
const result = (newUnit / currentUnit) * number;
console.log("result", result);
document.getElementById("data").innerHTML = `convert value =${result}`;
