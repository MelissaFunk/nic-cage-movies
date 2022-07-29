import { useState } from 'react'

function MovieCard({ movie, currentUser }) {
  const [watched, setWatched] = useState(false)

  const handleWatchClick = () => {
    fetch('/views', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movie_id: movie.id, user_id: currentUser.id })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setWatched(watched => !watched)
    })
  }

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img className="movie_poster" src={movie.image} alt={movie.title}/>
      <p>{movie.year} | {movie.category}</p>
      <a className="imdb-link" href={movie.link} target="_blank" rel="noreferrer">IMDB Link</a>
      <button className="movie-card-btn" onClick={handleWatchClick}>{movie.views.some(e => e.user_id === currentUser.id) || watched ? "WATCHED" : "UNWATCHED"}</button>
    </div>
  );
}

export default MovieCard;

