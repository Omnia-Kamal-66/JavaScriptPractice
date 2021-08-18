const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequests(method, url, data) {
  //fetch takes a url and send a get request
  //fetch is promise based , so that's the first native promise api we see in this course
  //it uses promises on its own
  //fetch gives us a streamed response ,which means that response object doesn't hold the body in a way that would be ready to be used
  //to fix that we use then and response.json

  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("something went wrong - server-side");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("something went wrong!");
    });
} //returns a promise
//we added  return in the else block ,we returned that inner promise chain so it is merged into the outer promise chain

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequests(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
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
