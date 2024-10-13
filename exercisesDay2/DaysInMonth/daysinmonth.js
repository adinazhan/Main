let month = Number(prompt("input month number"));
let days = 31;
if (month === 2) {
  days = 28;
} else if (month === 4) {
  days = 30;
} else if (month === 6) {
  days = 30;
} else if (month === 9) {
  days = 30;
} else if (month === 11) {
  days = 30;
}
document.write("Month " + month + "has " + days + " days");
