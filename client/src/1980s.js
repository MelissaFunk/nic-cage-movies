import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function Eighties({ currentUser }) {
  const [movies, setMovies] = useState([])
  const [filterByCategory, setFilterByCategory] = useState("All")

  useEffect(() => {
    fetch('/movies/80s')
    .then(res => res.json())
    .then(setMovies)
  }, [])

  function handleCategoryFilterChange(e) {
    setFilterByCategory(e.target.value)
  }

  function moviesToDisplayCategory() {
    return movies.filter(movie => {
      if (filterByCategory === "All") {
        return true
      } else {
        return movie.category.includes(filterByCategory)
      }
    })
  }  

  const movieCards = moviesToDisplayCategory().map(movie =>
      <MovieCard key={movie.id} movie={movie} currentUser={currentUser}/>
    )

  return (
    <div className="movies">
      <div>
      <label className="search-bar">Search by Genre: </label>
      <select onChange={handleCategoryFilterChange}>
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Biography">Biography</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Family">Family</option>
        <option value="Fantasy">Fantasy</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Music">Music</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Thriller">Thriller</option>
        <option value="War">War</option>
      </select>
      </div>
      {movieCards}
    </div>

  );
}

export default Eighties;