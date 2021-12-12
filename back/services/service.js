const movies = [{
  id: 1,
  name: "Harry Potter e a Pedra Filosofal",
  image: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg",
  genre: "Fantasia",
  score: 7,
  watched: true,
},
{
  id: 2,
  name: "Panico",
  image: "https://m.media-amazon.com/images/M/MV5BNmQ0OWJiNWUtZGRiOS00MDRkLTk5NzMtN2RhN2NiZDg5NTE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  genre: "Terror",
  score: 7,
  watched: false,
},
{
  id: 3,
  name: "Senhor dos Aneis a Sociedade do Anel",
  image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqx8SUXCHUTeMs5LdSyZgjQ66qkWE_NQa4Xax2Wf2rS2_1TBmf",
  genre: "Fantasia",
  score: 9,
  watched: true,
}
]

const getMovies = () => movies;

const getMoviesById = (id) => {
  return movies.find( (movie) => movie.id == id)
}

const postMovie = (newMovie) => {
  const idParam = movies.length + 1;
  newMovie.id = idParam
  movies.push(newMovie);
  return newMovie;
}

const putMovie = (id, modifiedFilm) => {
  const index = movies.findIndex((film) => film.id == id);
  if (index >= 0){
    movies[index] = {
      ...movies[index],
      ...modifiedFilm
    }
    return modifiedFilm
  } else {
    return false
  }
}

const deleteMovie = (id) => {
  if(!id){
    return
  }
  const index = movies.findIndex((movie) => movie.id == id);
  const deletedMovie = movies[index];
  movies.splice(index, 1);
  return deletedMovie;
}

module.exports = {
  getMovies,
  getMoviesById,
  postMovie,
  putMovie,
  deleteMovie
}
