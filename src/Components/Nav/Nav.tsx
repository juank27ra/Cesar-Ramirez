import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="nav-container">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/contactame"}>contáctame</Link>
        <Link to={"/my-books"}>Mis Libros</Link>
        <Link to={"/About-me"}>Conozcame</Link>
      </ul>
    </div>
  );
};

export { Nav };
