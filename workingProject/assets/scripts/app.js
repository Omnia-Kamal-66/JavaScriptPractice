const addMovieModal = document.getElementById("add-modal");

const startAddMovieBtn = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");

const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const addMovieBtn = addMovieModal.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUi = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const openMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const AddingToMovieList = () => {
  const titleInput = userInputs[0].value;
  const imageInput = userInputs[1].value;
  const ratingInput = userInputs[2].value;
  if (
    titleInput.trim() === "" ||
    imageInput.trim() === "" ||
    ratingInput.trim() === "" ||
    +ratingInput < 1 ||
    +ratingInput > 5
  ) {
    alert("please enter valid values");
    return;
  }

  const movie = {
    id: Math.random().toString(),
    Title: titleInput,
    Image: imageInput,
    Rating: ratingInput,
  };

  movies.push(movie);
  console.log(movies);

  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(movie.id, movie.Title, movie.Image, movie.Rating);
  updateUi();
};
const cancelAddMovie = () => {
  closeMovieModal();
  clearMovieInput();
  toggleBackdrop();
};

const renderNewMovieElement = (id, title, image, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
              <div class = "movie-element__image">
                  <img src="${image}" alt="${title}">
              </div>
              <div class = "movie-element__info">
                  <h2>${title}</h2>
                  <p> ${rating}/5 stars</p>
              
              </div>
          `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const movieList = document.getElementById("movie-list");
  movieList.append(newMovieElement);
};
const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};
const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

/* whenever i start the deletion process , i add an event listener for both buttons
when i cancel we ecxute the canceling event listener or the cancel movie deletion function and not the other one (deleteMovie)
if i then click on the same movie again or even on a different movie , the problem is that we add a new event listener to the cancel and the confirm 
deletion buttons but the old listeners are also still here 
we must not forget that , the dom objects , these buttons ,are never removed
so the event listeners are of course never cleared
so that means if we then click confirm on that newly opened modal , all event listeneres we excuted in the past will excute , 
even the ones for the other movie you might hve clicked on before 
and if we only have one movie , and we open and close this confirm modal multiple times (open the model and cancel multiple times),then we basically add more and more listeners to the confirm button
and then we click yes , we got an error message complainig that you can't remove that element anymore because it's gone already as you opened this modal
it succeeds one time when clicking the confirm button , but it fails 4 times out of five if i clicked the cancel button five times then once the confirm button
for multiple movies , i might have clicked on all these movies and then all these evenet listeners are registered,
and then if i click yes on some movie , all event listeners excutes .

solution : we want to clear all these event listeners

but the problem is , there is a confirm deletion button and of course also for the other button
remove event listener function , but this takes the event for which you want to remove a listener ,and the function which you excuted on your event listener

so we add a remove event listener to the confirmation button , but now here since i use bind , this actually returns a new function ,
now you might think i call bind here  again but this actually return a new function object ,
and because as you know , two objects even if the hold the same contenet which here is not guaranteed  because the movie id might be different
, but even if it would be the same content , objects therfore also functions are different
so this(remove event listener) would look for an event listener with this function object which is not the same as this event
SO , this will not work for this deletemovie function.

now , the good news is for the cancel button , it will work because there i'm not using bind 
so if i add a remove event listener , and then point to cancel movie deletion function , we use exactly the same function object beacause we don't 
create a new one , we point at this global function which is created once when the script runs at the beginning

for the confirm deletion button we need a workaround , which is recreate the deletion button , because if we do that ,
we get rid of the old dom object and with that , all existing event listeners will  be removed ,if you hold no other refrences at this button ,
which we don't ,we only point at this point here inside of this function , so whenever this function excution is done these constants will go
into the void and therefore , garbage collection can then kick in and actually get rid of these old event listeners
*/

const deleteMovieHandler = (movieId) => {
  console.log(deleteMovieModal);
  deleteMovieModal.classList.add("visible");
  const cancelDeletionBtn = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");
  /* we selected the button as let , it will vary , not const , and then i reselect the new button after it is cloned */
  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
  confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionBtn.removeEventListener("click", cancelMovieDeletion);
  //   confirmDeletionBtn.removeEventListener(
  //     "click",
  //     deleteMovie.bind(null, movieId)
  //   ); //will not work

  cancelDeletionBtn.addEventListener("click", cancelMovieDeletion);
  confirmDeletionBtn.addEventListener("click", deleteMovie.bind(null, movieId));
  toggleBackdrop();
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const movieList = document.getElementById("movie-list");
  movieList.children[movieIndex].remove();
  deleteMovieModal.classList.remove("visible");
  toggleBackdrop();
  updateUi();
};
const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletion();
  clearMovieInput();
};

startAddMovieBtn.addEventListener("click", openMovieModal);
cancelAddMovieBtn.addEventListener("click", cancelAddMovie);
backdrop.addEventListener("click", backdropClickHandler);
addMovieBtn.addEventListener("click", AddingToMovieList);
