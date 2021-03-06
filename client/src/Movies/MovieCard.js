import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieCard = props => {
  const history = useHistory()
  const { id, title, director, metascore, stars } = props.movie;
  
  console.log(props)

  const editMovie = () => {
    history.push(`/update-movie/${id}`)
  }

  const deleteMovie = () => {
    // axios delete 
    history.push(`/`)
  }
 
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <br></br>
      <button onClick={editMovie}>edit movie</button>
      <br></br>
      <button onClick={deleteMovie}>DELETE</button>

    </div>
  );
};

export default MovieCard;
