const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequests(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //aloows you to send http request ,it is built in the browser

    xhr.open(method, url); //

    xhr.responseType = "json"; //instead of json.parse

    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.send(JSON.stringify(data)); //this will send a request
  });

  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequests(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  sendHttpRequests("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchPosts();
createPost("DUMMY", "A dummy post!");
/*
JSON constructor function has a couple of static helper methods,
-parse :helps to convert json to javascript
-stringify :helps you to convert javascript objects and arrays to json

*/
