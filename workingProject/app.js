const hobbies = ["sports", "cooking"];
hobbies.push("reading"); //add a new element to the end of the array
hobbies.unshift("coding"); //add a new element in the first place of the array
const deletedElement = hobbies.pop(); //remove the item in the end
hobbies.shift(); //remove the item at the beginnig of the array
console.log(deletedElement);
console.log(hobbies);

//push and return also return something , a number which is the new length of the array
//pop returns the element it removed
//shift function , shifts all elements in the array one place to the left , which mean drops the first element
//unshift , shifts all elements one place to the right
//shift and unshift are slower than push and pop because they affect all elements

hobbies[1] = "Coding";
// hobbies[5] = "Reading"; //rarely used
console.log(hobbies);

//splice method , help us insert elements between two elements , used only on real arrays
//splice returns the removed elements
//we can use negative index , splice(-1 , 1) this will go to the end of the array
hobbies.splice(1, 0, "Good Food"); //insert this elements in the first place you start looking
console.log(hobbies);
hobbies.splice(0, 1); //splice(0) deletes all array items , splice(1) skipps first element and delete the rest of the array and so on
console.log(hobbies);
