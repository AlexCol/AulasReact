import './Navbar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {  
  return (
    <nav className='minhaNav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar