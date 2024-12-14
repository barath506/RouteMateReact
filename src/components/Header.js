import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Routemate Logo" />
      </Link>
      <nav className="navigation">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/products">Products</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
