// // const number = 16;
// // const verdict = number % 2 == 0 ? "even" : "odd";

// // console.log(verdict);
// // // .........
// // const logMyAge = () => {
// //   console.log(100);
// // };
// // logMyAge();
// // // .........

// // const greet = (who) => {
// //   console.log("hello, " + who);
// // };
// // greet("world");

// // // .........

// // const redDiv = document.getElementById("red-box");
// // console.log(redDiv);
// // // .........

// // const greenBox = document.querySelector(".box--green");
// // console.log(greenBox);
// // // .........
// // const boxes = document.querySelector(".box");
// // console.log(boxes);
// // // .........

// const getBoxByColor = (color) => {
//   return document.querySelector(".box--" + color);
// };
// const box = getBoxByColor("green");
// console.log(box);

// //.....
// // console.log(document.querySelectorAll("ul.cars.li"));
// // //......

// let brands = [];
// const myList = document.querySelectorAll("ul.cars li");
// for (let i = 0; i < myList.length; i++) {
//   if (brands.length == 3) {
//     break;
//   } else if (myList[i].innerText == "Ford") {
//     continue;
//   }
//   brands.push(myList[i].innerText);
// }
// // console.log(brands);

const cart = {
  total: { amount: 91.6, currency: "CZK" },
  items: [
    { name: "Apples", amount: "2kg", price: 62.6 },
    { name: "Cinnamon", amount: 1, price: 29 },
  ],
};
//.....
let stringy = JSON.stringify(cart);
console.log(stringy);
//....
const shopping_cart = JSON.parse(stringy);
console.log(shopping_cart);
//......
let cheapest = null;
shopping_cart.items.forEach((item) => {
  if (cheapest === null || item.price < cheapest.price) {
    cheapest = item;
  }
});
console.log(cheapest);
....

const myButton = document.querySelector(".remove-cheapest");
myButton.addEventListener("click", () => {
    let cheapest=null
  const removed = shopping_cart.splice(cheapest);
  console.log(removed);
});
