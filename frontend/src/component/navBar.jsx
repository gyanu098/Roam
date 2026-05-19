import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
    </nav>
  );
};

export default Navbar 