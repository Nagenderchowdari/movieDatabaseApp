// components/Home.js
import {useEffect, useState} from 'react'
import {getPopularMovies} from '../../api/api'
import MovieGrid from '../../comman/MovieGrid'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchPopularMoviesData = async () => {
      try {
        const data = await getPopularMovies()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching popular movies:', error)
      }
    }

    fetchPopularMoviesData()
  }, [])

  return (
    <div>
      <h1>movieDB</h1>
      <h2>Popular Movies</h2>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default Home
