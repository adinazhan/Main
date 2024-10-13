// const task = async () => {
//   const response = await fetch(
//     "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
//   );
//   console.log(response);

//   const data = await response.json();
//   console.log(data);
// };
// task();

const myTask = async () => {
  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science"
  );
  console.log(response);

  const data = await response.json();
  // console.log(data.data.channel);
};
myTask(
  "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science"
);
