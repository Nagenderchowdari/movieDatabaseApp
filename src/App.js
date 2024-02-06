// App.js
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import SearchedMovies from './components/SearchedMovies'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/search" component={SearchedMovies} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
