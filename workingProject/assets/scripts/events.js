const buttons = document.querySelectorAll("button");
// button.onclick= function(){

// };
const ButtonClickHandler = (event) => {
  //   event.target.disabled = true;
  console.log(event);
};
const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};
// button.onclick = ButtonClickHandler; //we can only add one handler to this event on this element
// button.onclick = anotherButtonClickHandler;//this is the only function that will excute

//this approach allows you to add more than one function as an event handler

const boundFn = ButtonClickHandler.bind(this);
// button.addEventListener("click", ButtonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", ButtonClickHandler);
// }, 2000);

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", ButtonClickHandler);
});

window.addEventListener("scroll", (event) => {
  console.log(event);
});
