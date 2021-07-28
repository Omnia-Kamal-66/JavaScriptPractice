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
const deleteMovieHandler = (movieId) => {
  console.log(deleteMovieModal);
  deleteMovieModal.classList.add("visible");
  const cancelDeletionBtn = deleteMovieModal.querySelector(".btn--passive");
  const confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");
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
};

startAddMovieBtn.addEventListener("click", openMovieModal);
cancelAddMovieBtn.addEventListener("click", cancelAddMovie);
backdrop.addEventListener("click", backdropClickHandler);
addMovieBtn.addEventListener("click", AddingToMovieList);
