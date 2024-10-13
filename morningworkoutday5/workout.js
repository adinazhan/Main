const myText = document.querySelector(".text");
const lock = document.querySelector(".padlock");

const enterMouse = () => {
  lock.addEventListener("mouseenter", () => {
    myText.style.display = "block";
  });
};

enterMouse();

const leaveMouse = () => {
  lock.addEventListener("mouseleave", () => {
    myText.style.display = "none";
  });
};
leaveMouse();

// lock.addEventListener("click", () => {
//   if () {
//     enterMouse();
//   }
// });
