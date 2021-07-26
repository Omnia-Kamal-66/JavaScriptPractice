const h1 = document.getElementById("main-title");

h1.textContent = "some new title";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + "(Changed)";

// const listItemElements = document.querySelectorAll("li"); //this doesn't give a live list , this just takes a snapshot

//this gives you a live list which reflects changes to the selected elements(if the number of elements changed)
const listItemElements = document.getElementsByTagName("li");

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}
