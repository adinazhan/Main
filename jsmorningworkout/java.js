const seatNum = prompt("What is your sear number?");
const seatColumn = seatNum % 10;
const seatRow = Math.floor(seatNum / 10);
const seatLetter = String.fromCharCode(65 + seatRow);
console.log("Your seat number is " + seatLetter + seatColumn);
