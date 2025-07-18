import { Link, useLocation } from "react-router-dom";


const SideBar = () => {

    const location = useLocation();
    const path = location.pathname;

    return (
    <div className="Card">
        <img
          className="photo"
          src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg"
        ></img>
        <h1 style={{ marginLeft: "12px" }}>Vijay Chaudhary</h1>
        <h4 style={{ marginLeft: "54px" }}> Software Developer </h4>

        <div className="menu-list">
          <ul className="gap-list">
            <li className={path === '/home' && 'active-link'}>
              <Link to="/home" className="card-font">
                Home
              </Link>
            </li>

            <li className={path === '/education' && 'active-link'}>
              <Link to="/education" className="card-font">
                Education
              </Link>
            </li>

            <li className={path === '/experience' && 'active-link'}>
              <Link to="/experience" className="card-font">
                Experience
              </Link>
            </li>

            <li className={path === '/project' && 'active-link'}>
              <Link to="/project" className="card-font">
                Projects
              </Link>
            </li>

            <li className={path === '/skills' && 'active-link'}>
              {" "}
              <Link to="/skills" className="card-font">
                Skills
              </Link>{" "}
            </li>

            <li className={path === '/achievements' && 'active-link'}>
              <Link to="/achievements" className="card-font">
                Achievements
              </Link>
            </li>

            <li className={path === '/contact' && 'active-link'}>
              <Link to="/contact" className="card-font">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default SideBar;
