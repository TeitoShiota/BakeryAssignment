import { Outlet, Link } from "react-router-dom";
import "../Styles/Global.scss";

const Layout = () => {
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
            <Link to="/blogs">User-Recipies</Link>
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

export default Layout;