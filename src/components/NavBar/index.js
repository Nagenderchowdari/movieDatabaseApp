// NavBar/index.js
import {Link} from 'react-router-dom'

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/top-rated">Top Rated</Link>
    <Link to="/upcoming">Upcoming</Link>
    <input type="text" placeholder="Search" />
    <button type="button">Search</button>
  </nav>
)

export default NavBar
