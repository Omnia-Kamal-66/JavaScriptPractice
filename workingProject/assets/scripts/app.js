const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

const xhr = new XMLHttpRequest(); //aloows you to send http request ,it is built in the browser

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); //

xhr.responseType = "json"; //instead of json.parse

xhr.onload = function () {
  const listOfPosts = xhr.response;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
};

xhr.send(); //this will send a request

/*
JSON constructor function has a couple of static helper methods,
-parse :helps to convert json to javascript
-stringify :helps you to convert javascript objects and arrays to json

*/
