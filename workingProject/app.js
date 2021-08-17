/*


*/

const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
  //promise takes a function as an argument , which will be excuted when the promise is constructed
  //this function takes to arguments , and each argument is also a function
  //now the timer is set when the promise is created
  //after creating the promise , not after the timer is done , i will return the promise so i can use it where ever i call the set timer function
  //i will call the resolve in set time out , so the browser will send it after the promise is created
  //resolve function will mark this promise object as done
  //setTimer does return a promise , you can call then on it , you can call this then method when a promise is resolved ,so when the timer is done

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });

  return promise;
};

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {}
    );
  });

  return promise;
};

function trackUserHandler() {
  let positionData;

  getPosition()
    .then((posData) => {
      positionData = posData;
      //here the promise is resolved , but when we return something in the then callback function , this will set the promise to pending , and we will wait to the returned promise to be resolved ,and now we can add a new then block after the first one
      return setTimer(2000); //the promise of the getposittion is now set back from being done to being pending
    })
    .then((data) => {
      console.log(data, positionData);
    }); //here i get the data of that inner promise,which in this case the timer data
  setTimer(1000).then(() => {
    console.log("Timer Done");
  });
  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
