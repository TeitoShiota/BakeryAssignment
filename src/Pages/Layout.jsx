import { Outlet, Link } from "react-router-dom";
import "../Styles/Global.scss";

export default function Layout() {
  return (
    <>
    <div id="Navyman">
        <h1>Baking</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-recipe">Create Recipe</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Outlet  />
    </>
  )
};