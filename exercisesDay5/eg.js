const employee = {
  first_name: "Alfred",
  last_name: "Pennyworth",
  age: 67,
  occupation: "butler",
  place_of_residence: "Gotham",
  photo_url: "https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg",
};

const full_name = document.querySelector(".employee__full-name");
full_name.innerHTML = employee.first_name + " " + employee.last_name;
