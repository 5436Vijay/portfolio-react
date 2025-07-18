import { Link } from "react-router-dom";
import "../styles/project.css";

const Project = () => {
  return (
    <div>
      <h1 className="heading">Here is my all Projects details</h1>
      <div className="project-frame">
        <div className="procard">
          <h4 className="pro-title">Project 1</h4>
          <h2 >Counter App</h2>
          <p>This app is to demonstrate, the counter functionality</p>
          <Link to="/project/counter" className="goto-btn">
            Goto Project
          </Link>
        </div>

        <div className="procard">
          <h4 className="pro-title">Project 2 - In Progress</h4>
          <h2>Todo App</h2>
          <p>This app is to demonstrate, the to do app functionality</p>
          <Link to="/project/to-do" className="goto-btn" style={{ pointerEvents: 'none', background: 'gray'}}>
            Goto Project
          </Link>
        </div>
        <div className="procard">
          <h4 className="pro-title">Project 3 - Upcoming</h4>
          <h2>Calculator App</h2>
          <p>This app is to demonstrate, the calculator functionality</p>
          <Link to="/project/calculator" className="goto-btn" style={{ pointerEvents: 'none', background: 'gray'}}>
            Goto Project
          </Link>
        </div>
        <div className="procard">
          <h4 className="pro-title">Project 4 - Upcoming</h4>
          <h2>SplitKaro App</h2>
          <p>This app is to demonstrate, the bills split functionality</p>
          <Link to="/project/SplitKaro" className="goto-btn" style={{ pointerEvents: 'none', background: 'gray'}}>
            Goto Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
