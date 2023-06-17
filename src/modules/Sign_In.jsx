import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Sign_In() {
  return (
    <div className="Sign_In">
      <Navbar />
      <Link to={`/Register`}>Register Page</Link> <br />
      <br />
      Sign In
    </div>
  );
}

export default Sign_In;
