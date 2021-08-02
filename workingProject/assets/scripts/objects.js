/* the idea of this application is that user can set the name of the property and the value of the property 
if the user clicks add movie it will be added to a list and the list is shown in the page
we have also search bar , if we entered a term in it , and if the title of the movie includes that search trem , we want to show it here
*/

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");
const movies = [];

const renderMovies = () => {
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const listElement = document.createElement("li");
    listElement.textContent = movie.info.title;
    movieList.appendChild(listElement);
  });

  //   console.log(listElement);
  //   movieList.appendChild(listElement);
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  renderMovies();
  console.log(newMovie);
};

addMovieBtn.addEventListener("click", addMovieHandler);
