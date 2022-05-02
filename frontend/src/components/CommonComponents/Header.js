import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {

  return (
    <Fragment>
      <div className="navContainer">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to={'/'}>
          <span className="navbar-brand mb-0 h3">Tax Bracket</span>
          </Link>
          <ul className="nav justify-content-center">

          <li className="nav-item">
                <Link className="nav-link" to={'/user/create'} style={{fontWeight:"bold", color:"white"}}>
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </Fragment>
  );
};

export default Header;
