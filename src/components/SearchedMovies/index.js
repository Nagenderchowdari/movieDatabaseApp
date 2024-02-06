// components/SearchedMovies.js
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {searchMovies} from '../../api/api'
import MovieGrid from '../../comman/MovieGrid'

const SearchedMovies = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation()
  const searchQuery = new URLSearchParams(location.search).get('query') || ''

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      try {
        const data = await searchMovies(searchQuery)
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching searched movies:', error)
      }
    }

    fetchSearchedMovies()
  }, [searchQuery])

  return (
    <div>
      <h2>Searched Movies</h2>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default SearchedMovies
