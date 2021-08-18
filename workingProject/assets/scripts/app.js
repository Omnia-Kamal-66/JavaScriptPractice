const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequests(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //aloows you to send http request ,it is built in the browser

    xhr.open(method, url); //

    xhr.responseType = "json"; //instead of json.parse
    //if you have a request that leaves page successfully and you get back a response,even if that response indicated there's something wrong in the server side ,
    //you will end up in the onload function
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        //indicates a success
        resolve(xhr.response);
      } else {
        reject(new Error("Something went wrong!"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Failed to send a request"));
    }; //will be fired when we have a network error , the request fails to be sent

    xhr.send(JSON.stringify(data)); //this will send a request
  });

  return promise;
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequests(
      "GET",
      "https://jsonplaceholder.typicode.com/pos"
    );

    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
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

fetchButton.addEventListener("click", () => {
  fetchPosts();
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); //to preent the browser from submitting the form
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredcontent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredcontent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequests(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});

/*
JSON constructor function has a couple of static helper methods,
-parse :helps to convert json to javascript
-stringify :helps you to convert javascript objects and arrays to json

*/
