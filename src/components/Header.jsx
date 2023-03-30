// Named Import
import { Title } from "./Title";

function Header() {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
}

export default Header;
