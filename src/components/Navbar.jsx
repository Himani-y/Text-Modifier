import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode ==='light'?`dark`:`light`}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label"onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault" >
             Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// To pass the argument as per developer convenience and don't want to change its type in future we write their types....using protoype function.
Navbar.prototype = {
  title: PropTypes.string.isRequired, //isReuoired is used when it is necessary to send props otherwise will get an error.
  about: PropTypes.string.isRequired,
};

//if no value has been passed to the props but used here so we can set a default props function to give them a default value .....
// Navbar.defaultProps = {
//   title: "SetTitleHere",
//   about: "SetAboutHere",
// };
