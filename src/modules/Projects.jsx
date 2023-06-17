import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Projects() {
  return (
    <div className="Projects">
      <Navbar />
      <Link to={`/Portfolio`}>Portfolio Page</Link> <br />
      <br />
      Projects
    </div>
  );
}

export default Projects;
