import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './SecondaryHeader.css'

export default function SecondaryHeader() {
  const location = useLocation();

  if (location.pathname !== '/') {
    return (
      <div className="secondary-header">
        <Link to="/">
          <h1 id="back-arrow">&lt;</h1>
        </Link>
        <Link to="/about">
          <h1 className={"unselectable header-link " + (location.pathname === '/about' ? 'header-title' : '')}>
            about
          </h1>
        </Link>
        <Link to="/projects">
          <h1 className={"unselectable header-link " + (location.pathname === '/projects' ? 'header-title' : '')}>
            projects
          </h1>
        </Link>
        <Link to="/art">
          <h1 className={"unselectable header-link " + (location.pathname === '/art' ? 'header-title' : '')}>
            art
          </h1>
        </Link>
        <Link to="/contact">
          <h1 className={"unselectable header-link " + (location.pathname === '/contact' ? 'header-title' : '')}>
            contact
          </h1>
        </Link>
      </div>
    )
  } else {
    return null
  }
}
