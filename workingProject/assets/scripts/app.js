const addMovieModal = document.getElementById("add-modal");

const startAddMovieBtn = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");

// const cancelAddMovieBtn = document.querySelector("div button");

const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

startAddMovieBtn.addEventListener("click", toggleMovieModal);
cancelAddMovieBtn.addEventListener("click", cancelAddMovie);
backdrop.addEventListener("click", backdropClickHandler);
