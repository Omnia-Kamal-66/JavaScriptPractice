const section = document.querySelector("section");

// section.style.backgroundColor = "blue";

section.className = "red-bg";

//this is how we manually manage the classes
const button = document.querySelector("button");
button.addEventListener("click", () => {
  //   if (section.className === "red-bg visible") {
  //     section.className = "red-bg invisible";
  //   } else {
  //     section.className = "red-bg visible";
  //   }

  //instead : use the classlist to check if a certain class is set , and don't worry about other classes

  /* now classlist will automatically check whether visible is set when we call toggle visible and 
we'll remove it if it is and add it otherwise  */
  //   section.classList.toggle("visible");

  section.classList.toggle("invisible");
});
