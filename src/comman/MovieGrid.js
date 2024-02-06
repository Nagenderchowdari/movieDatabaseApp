const MovieGrid = ({movies}) => (
  <div className="movie-grid">
    {movies.map(movie => (
      <div key={movie.id} className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
        <button type="button">View Details</button>
      </div>
    ))}
  </div>
)

export default MovieGrid
