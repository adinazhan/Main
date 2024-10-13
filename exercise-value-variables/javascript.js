// const wine = 60 / 5;
// console.log(wine);

// const week = wine * 7;
// console.log(week);

// const areaRectangle = 6 * 2.5;
// const areaTile = 0.5 * 0.5;

// console.log(areaRectangle / areaTile);

// const brutto = 12 * 8 * 21;
// let netto = brutto * (1 - 0.15);
// const pay = 12;
// const hours = 8;
// const days = 21;
// const tax = 0.15;

// console.log(brutto);
// netto = brutto * (1 - tax);
// console.log(netto);

// const apartment = 6688 * 80;
// console.log(apartment);

// const czk = apartment * 25;
// // console.log(czk);

// // const years = (czk * 0.85) / (800 * 12);
// // console.log(years);

// // const message = "Your mortgage will last " + years + " years";
// // console.log(message);

// const classHours = 7 * 4 + 3;
// console.log(classHours);

// const studyHours = classHours * 0.3;
// console.log(studyHours);

// const totalStudyTime = (classHours + studyHours) * 12;
// console.log(totalStudyTime);

// const studyMessage = "Total study time: " + totalStudyTime;
// console.log(studyMessage);

//birth year exercise

// const year = Number(prompt("What is your birth year?"));
// const print = 2020 - year;
// console.log(print);

// const euro = Number(prompt("how much euro do you have?"));
// const czk = euro * 25.695;
// console.log("you have" + Math.round(czk));

const numOfCharacters = prompt("Enter your message");
const numOfMsg = numOfCharacters.length / 10;
console.log(Math.ceil(numOfMsg));
