const addition = (number1, number2) => {
  return number1 + number2;
};

console.log(addition(1, 3));

const calculator_functions = [
  (number1, number2) => {
    return number1 + number2;
  },

  (number1, number2) => {
    return number1 - number2;
  },
];

console.log(calculator_functions[1](4, 2));

const calculator = {
  functions: {
    addition: (number1, number2) => number1 + number2,
  },
};
console.log(calculator.functions.addition(1, 2));

let currentWeather = "sunny";
const whatShouldIDo = (weather) => {
  if (weather == "sunny") {
    return () => {
      console.log("Going for a walk");
    };
  } else if (weather == "rainy") {
    return () => {
      console.log("Nap time");
    };
  }
};

const myValue = whatShouldIDo(currentWeather);
console.log(myValue());

