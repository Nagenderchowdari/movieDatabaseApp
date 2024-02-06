// components/Upcoming.js
import {useEffect, useState} from 'react'
import {getUpcomingMovies} from '../../api/api'
import MovieGrid from '../../comman/MovieGrid'

const Upcoming = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchUpcomingMoviesData = async () => {
      try {
        const data = await getUpcomingMovies()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching upcoming movies:', error)
      }
    }

    fetchUpcomingMoviesData()
  }, [])

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default Upcoming
