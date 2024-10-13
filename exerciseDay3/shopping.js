const shoppingList = ["spaghetti", "passata", "onion", "chicken"];

console.log(shoppingList[1]);
console.log(shoppingList[2]);
console.log(shoppingList[0]);

shoppingList[4] = "peas";
console.log(shoppingList);

shoppingList[2] = "garlic";
console.log(shoppingList);

shoppingList.push("sauce");
console.log(shoppingList);

shoppingList.unshift("cream");
console.log(shoppingList);

shoppingList.splice(3, 0, "potato");
console.log(shoppingList);

shoppingList.splice(3, 2, "lettuce");
console.log(shoppingList);

const fruits = [
  {
    name: "apple",
    count: 4,
  },
  {
    name: "pear",
    count: 2,
  },
  {
    name: "banana",
    count: 3,
  },
  {
    name: "orange",
    count: 2,
  },
  {
    name: "mango",
    count: 1,
  },
];

const countTwo = fruits.filter((fruit, index) => {
  if (fruit.count === 2) {
    return true;
  } else {
    return false;
  }
});
console.log(countTwo);
