/*
promise takes a function as an argument , which will be excuted when the promise is constructed
  this function takes to arguments , and each argument is also a function
  now the timer is set when the promise is created
  after creating the promise , not after the timer is done , i will return the promise so i can use it where ever i call the set timer function
  i will call the resolve in set time out , so the browser will send it after the promise is created
  resolve function will mark this promise object as done
  setTimer does return a promise , you can call then on it , you can call this then method when a promise is resolved ,so when the timer is done

*/

const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
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
      (error) => {
        reject(error); //it will mark the promise as failed
      }
    );
  });

  return promise;
};
//with async ,your function will automatically return a promise
//inside your function you can use await in front of any promise
//await waits for the promise to be resolved or to fail and then the next line will excute
//the data which might be resolved will be returned
async function trackUserHandler() {
  // let positionData;
  //the place of your cath block does matter , if you have more than then block , and if one is failed , it will continue to the next then if the catch block was after the first then block
  //if you want to cancel all then blocks ,you have to put your catch block at the end othe chain
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }

  console.log(timerData, posData);

  // .then((posData) => {
  //   positionData = posData;
  //   //here the promise is resolved , but when we return something in the then callback function , this will set the promise to pending , and we will wait to the returned promise to be resolved ,and now we can add a new then block after the first one
  //   return setTimer(2000); //the promise of the getposittion is now set back from being done to being pending
  // })
  // .catch((err) => {
  //   console.log(err);
  //   return "on we go...";
  // })
  // .then((data) => {
  //   console.log(data, positionData);
  // }); //here i get the data of that inner promise,which in this case the timer data
}

button.addEventListener("click", trackUserHandler);
