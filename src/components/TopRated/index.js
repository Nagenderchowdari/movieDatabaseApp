// components/TopRated.js
import {useEffect, useState} from 'react'
import {getTopRatedMovies} from '../../api/api'
import MovieGrid from '../../comman/MovieGrid'

const TopRated = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchTopRatedMoviesData = async () => {
      try {
        const data = await getTopRatedMovies()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching top-rated movies:', error)
      }
    }

    fetchTopRatedMoviesData()
  }, [])

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default TopRated
