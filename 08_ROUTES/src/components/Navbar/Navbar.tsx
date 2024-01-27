import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
    {/* para links de navegação, recomenda-se usar o 'NavLink', usado abaixo, mas deixo o Link normal para consultas futuras */}
    {/*
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  )
}

export default Navbar