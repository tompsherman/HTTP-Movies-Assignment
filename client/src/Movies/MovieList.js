import React, {useState} from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList( props) {
  const [toggle, setToggle] = useState(false)

  const showMe = (event) => {
    setToggle(!toggle)
  }
  console.log("movieList props:", props)
  return (
    <div className="movie-list">
      {
        props.movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            {/* <MovieCard toggle={toggle} movie={movie} movieList={props.movies} /> */}
            <h2>{movie.title}</h2>
          </Link>
        ))
      }
    </div>
  );
}

export default MovieList;
