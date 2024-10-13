let age = Number(prompt("What is your age"));
let baseprice = 12;
let price = 0;

if (age < 6) {
  price = 0;
  document.write("ticket price is " + price);
} else if (age < 15 && age > 6) {
  price = baseprice * 0.35;
  document.write("ticket price is " + price);
} else if (age > 26 && age > 16) {
  price = baseprice * 0.65;
  document.write("ticket price is " + price);
} else if (age > 64 && age > 27) {
  document.write("ticket price is " + price);
} else if (age > 65) {
  price = baseprice * 0.5;
  document.write("ticket price is " + price);
}
