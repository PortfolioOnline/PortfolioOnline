import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Portfolio() {
  return (
    <div className="Portfolio">
      <Navbar />
      <Link to={`/Projects`}>Projects Page</Link> <br />
      <br />
      Portfolio
    </div>
  );
}

export default Portfolio;
