// const startAddMovieBtn = document.getElementsByTagName("header").children[1];
const startAddMovieBtn = document.querySelector("header button");
// const startAddMovieBtn = document.querySelector("header").lastElementChild;

const addMovieModal = document.getElementById("add-modal");

startAddMovieBtn.addEventListener("click", () => {
  addMovieModal.className = "modal visible";
});
