import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </nav>
  )
}

export default Navbar