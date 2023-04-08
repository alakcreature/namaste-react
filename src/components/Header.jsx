// Named Import
import { useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  // SPA - Single Page Application
  // Client Side Routing: we don't want to load anything from server.
  // Server Side Routing: we need to make request to server for every page.

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      {!loggedIn ? (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
}

export default Header;
