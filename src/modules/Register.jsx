import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Register() {
  return (
    <div className="Register">
      <Navbar />
      <Link to={`/Sign_In`}>Sign In Page</Link> <br />
      <br />
      Register
    </div>
  );
}

export default Register;
