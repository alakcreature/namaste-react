// Named Import
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const { items } = useSelector((state) => state.cart);

  // SPA - Single Page Application
  // Client Side Routing: we don't want to load anything from server.
  // Server Side Routing: we need to make request to server for every page.

  return (
    <div className="flex justify-between bg-pink-50">
      <Title />
      <div className="nav-items ">
        <ul className="flex py-10">
          <Link to="/" className="px-10">
            <li>Home</li>
          </Link>
          <Link to="/about" className="px-10">
            <li>About</li>
          </Link>
          <Link to="/contact" className="px-10">
            <li>Contact</li>
          </Link>
          <Link to="/cart" className="px-10">
            <li>Cart</li>
          </Link>
          <Link to="/instamart" className="px-10">
            <li>Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-10">Cart - {items?.length} Items</li>
          </Link>
        </ul>
      </div>
      <h1>{user.name}</h1>

      {!loggedIn ? (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
}

export default Header;
