// const section = document.querySelector("section");

// // section.style.backgroundColor = "blue";

// section.className = "red-bg";

// //this is how we manually manage the classes
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   //   if (section.className === "red-bg visible") {
//   //     section.className = "red-bg invisible";
//   //   } else {
//   //     section.className = "red-bg visible";
//   //   }

//   //instead : use the classlist to check if a certain class is set , and don't worry about other classes

//   /* now classlist will automatically check whether visible is set when we call toggle visible and
// we'll remove it if it is and add it otherwise  */
//   //   section.classList.toggle("visible");

//   section.classList.toggle("invisible");
// });

/* you can add a new html element using innerhtml 
ex: div.innerhtml = div.innerhtml + '<p> new</p>'
this rerender the whole old content  and maybe we wanna keep some of the old content
so we use insertadjacenthtml to just add a ne html but keep the old contenet as it is

-the other way is : createElement() mehtod and then appendchild it to any element
you can only use this method with the document ,
*/
