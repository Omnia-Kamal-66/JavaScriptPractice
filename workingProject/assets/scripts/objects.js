/* the idea of this application is that user can set the name of the property and the value of the property 
if the user clicks add movie it will be added to a list and the list is shown in the page
we have also search bar , if we entered a term in it , and if the title of the movie includes that search trem , we want to show it here
*/

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");
const movies = [];

const renderMovies = (filter = "") => {
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => {
        //without return keyword this won't work , if you won't ignore the curly braces , you shold use return
        return movie.info.title.includes(filter);
      });

  filteredMovies.forEach((movie) => {
    const listElement = document.createElement("li");

    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info; //renaming the extracted property in object destrcturing
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie); //we're using bind here to make this keyword refers to the movie object even if it's called by another context
    /* bind is useful whenever you ant to preconfigure a function for the future excution , but here we're planning to excute function right away
so instead we can use a different method which we can call on a function
call() > also takes multiple arguments 
simialr to call is apply , it also excutes the function right away , first argument is what this should refer to , but it has only one other argument
which is of type arrat , which may take any other arguments this function might be taking.
the differnce is call allows you to pass additional arguments as
a comma seprated list , but apply allows you to pass additional arguments as an array 
*/
    let text = getFormattedTitle.call(movie) + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key} : ${info[key]}`;
      }
    }
    listElement.textContent = text;
    movieList.append(listElement);
  });
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
    getFormattedTitle: function () {
      return this.info.title.toUpperCase();
    },
  };
  movies.push(newMovie);
  renderMovies();
  console.log(newMovie);
};
/* in the search handler , i want take the input and also trigger the render movies function,
but i ant to tell that function to not render all movies but only filtered ones */
const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
