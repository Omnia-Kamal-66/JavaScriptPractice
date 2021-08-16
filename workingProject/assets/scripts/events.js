const button = document.querySelector("button");
// button.onclick= function(){

// };
// const ButtonClickHandler = (event) => {
//   //   event.target.disabled = true;
//   console.log(event);
// };
// const anotherButtonClickHandler = () => {
//   console.log("This was clicked!");
// };
// button.onclick = ButtonClickHandler; //we can only add one handler to this event on this element
// button.onclick = anotherButtonClickHandler;//this is the only function that will excute

//this approach allows you to add more than one function as an event handler

// const boundFn = ButtonClickHandler.bind(this);
// button.addEventListener("click", ButtonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", ButtonClickHandler);
// }, 2000);

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", ButtonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
/*
all event listeners are registered in the bubbling phase which means excuting events handler from bottom to top
which means that capturing phase which runs first is totally ignored
but thereafter when the browser checks from inside to outside for the element on which the event occured,it first finds the button element ,then the section element

-we could switch to the capturing phase by adding a third argument to the event listeners
-add true as a third argument to tell the broser that this event listener should be part of the capturing phase(frrom outside to inside)

-this entire process of having multiple listeners for the same event ,that's called propagation
it means the event propagates up , it bubbles up , or in the capture phase , it kind of goes from outside to inside to inside,
but is means the event doesn't just occur on the element itself but also on all ancestors

-you can prevent this propagation,
event.stoppropagation or 
event.stopimmediatepropagation if we had more event listeners on the button , then after the first event listener ,
the other button listeners wouldn't run anymore
*/
/*
with event propagation ,you can implement a pattern which is called event delegation

event delegation : we are adding a listenerr on the next higher element as the event propagates

*/
const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  console.log(event);
  console.log("Clicked Div");
});
button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log(event);
  console.log("Clicked Button");
});

//event delegation
//if the li has more than an element , because we refering to the event target ,which is the element we clicked in , we now have a problem
const list = document.querySelector("ul");

//since events bubble up,we can also listen to a click on a list when we acttually clicked on a list item
list.addEventListener("click", (event) => {
  //console.log(event.currentTarget); //different from event.target , its the entire ul
  /*
  we can use a mix of event target and dom traversal toget access to the li 
  -closest() it traverses up in the ancestors tree 
  so no matter where we clicked , on h2 or p , it will alwas select the entire list item
  */
  event.target.closest("li").classList.toggle("highlight");

  //   event.target.classList.toggle("highlight");
});

// const listItems = document.querySelectorAll("li");
// listItems.forEach((li) => {
//   li.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });
