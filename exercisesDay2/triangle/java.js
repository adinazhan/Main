const angles1 = Number(prompt("Input first angle"));
const angles2 = Number(prompt("Input second angle"));
const angles3 = Number(prompt("Input third angle"));
const sum = angles1 + angles2 + angles3;
console.log(sum);
if (sum === 180) {
  alert("it is a triangle");
} else {
  alert("This is not a triangle");
}
