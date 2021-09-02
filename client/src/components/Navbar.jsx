import { NavLink } from 'react-router-dom'
import FromSearch from './FormSearch'

const Navbar = () => {
  return (
    <nav className="nav nav-tabs">
      <h1>Dexter Pokemon</h1>
        
      <ul>
        <li classname="nav-item"><NavLink activeClassName="active" to="/">Landing</NavLink></li>
        <li classname="nav-item"><NavLink activeClassName="active" to="/home">Home</NavLink></li>
        <li classname="nav-item"><NavLink activeClassName="active" to="/create">Create a Pokemon</NavLink></li>
      </ul>
      
      <FromSearch />
    </nav>
  );
}

export default Navbar;