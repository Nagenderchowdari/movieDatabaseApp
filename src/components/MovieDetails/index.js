// MovieDetails/index.js
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getMovieDetails, getMovieCast} from '../../api/api'

const MovieDetails = () => {
  const {id} = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(id)
        setMovieDetails(details)
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    }

    const fetchMovieCast = async () => {
      try {
        const castData = await getMovieCast(id)
        setCast(castData.cast)
      } catch (error) {
        console.error('Error fetching movie cast details:', error)
      }
    }

    fetchMovieDetails()
    fetchMovieCast()
  }, [id])

  if (!movieDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>Ratings: {movieDetails.vote_average}</p>
      <p>Duration: {movieDetails.runtime} minutes</p>
      <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Overview: {movieDetails.overview}</p>

      <h3>Cast</h3>
      <div>
        {cast.map(castMember => (
          <div key={castMember.id}>
            <img
              src={`https://image.tmdb.org/t/p/w100${castMember.profile_path}`}
              alt={castMember.name}
            />
            <p>Name: {castMember.name}</p>
            <p>Character: {castMember.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
