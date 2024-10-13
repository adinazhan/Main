const login = prompt("Enter Username");
const password = prompt("Enter Password");
// const secondPassword = prompt("re-enter your password");

// if (password == "sore-thumb-218") {
//   alert("access granted");
// } else {
//   alert("Nice try.");
// }

// if (password != secondPassword) {
//   alert("Your password do not match");
// } else {
//   alert("password matches");
// }

if (password.length >= 8) {
  const secondPassword = prompt("re-enter your password");
  if (password === secondPassword) {
    document.write("password OK");
  } else {
    document.write("Your password do not match");
  }
} else {
  document.write("password must have atleast 8 characters");
}
