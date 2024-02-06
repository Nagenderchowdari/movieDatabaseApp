// api.js
const API_KEY = 'https://www.themoviedb.org/documentation/api' // Replace with your actual API key

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching popular movies:', error)
    throw error
  }
}

export const getTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching top-rated movies:', error)
    throw error
  }
}

export const getUpcomingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching upcoming movies:', error)
    throw error
  }
}

export const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching movie details:', error)
    throw error
  }
}

export const getMovieCast = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching movie cast details:', error)
    throw error
  }
}

export const searchMovies = async query => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error searching movies:', error)
    throw error
  }
}
