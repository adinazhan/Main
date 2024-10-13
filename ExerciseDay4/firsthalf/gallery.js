// const data = [
//   [
//     "https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg",
//     "London",
//   ],
//   ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"],

//   [
//     "https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg",
//     "New York",
//   ],
//   [
//     "https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg",
//     "Nova Scotia",
//   ],
//   ["https://classes.codingbootcamp.cz/assets/classes/1428/tokyo.jpeg", "Tokyo"],
//   [
//     "https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg",
//     "Venice",
//   ],
// ];

const dog = {
  name: "Jack",
  activities: ["bark", "play", "sniff"],
  information: {
    ID: 38190238,
    surname: "Smith",
    owner: null,
  },
};

// console.log(dog);
// console.log(dog.information.ID);

let stringify = JSON.stringify(dog);
console.log(stringify);

let decode = JSON.parse(stringify);
console.log(decode);
