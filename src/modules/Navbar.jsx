import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <nav>
          <ul>
            <li>
              <Link to={`/Portfolio`}>Portfolio</Link>
            </li>
            <li>
              <Link to={`/Projects`}>Projects</Link>
            </li>
            <li>
              <Link to={`/Sign_In`}>Sign In</Link>
            </li>
            <li>
              <Link to={`/Register`}>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
