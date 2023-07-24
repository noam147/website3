


const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const myLink = document.getElementById("myLink");

// Define the hi function using function expression syntax
function hi() {
  const name = nameInput.value.toLowerCase();
  document.getElementById("nameInput").value = "";
  console.log(name);
  if (name === "ori" || name === "אורי"|| name === "אריאל"|| name === "chochai"|| name === "master chochai"|| name === "elyashiv"|| name === "eyal") {
    alert("hello to you")
    myLink.click();
  } else {
    document.getElementById("lol").innerHTML = "hi " + name;
    console.log("Hi " + name);
  }
}

// Remove the assignment of hi function to submitButton.onclick
// submitButton.onclick = function hi() {
//   hi();
// };

// Instead, you can directly assign the hi function to the onclick event
submitButton.onclick = hi;

//when the user clicks enter it will auto call the button
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    hi();
  }
});
