import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/asset/logo.gif";

const Navbar = () => {
  return (
    <div className="nav-container d-flex align-items-center text-white-50 rounded shadow-sm">
      <div className="">
        <nav className="nav nav-underline">
          <img className="hacker-logo" src={logo} alt="logo" />
          <Link className="nav-link active text-bold" to="/">
            Hacker News
          </Link>
          <span className="seperator">|</span>
          <Link className="nav-link" to="/">
            new
          </Link>
          <span className="seperator">|</span>
          <Link className="nav-link" to="/">
            past
          </Link>{" "}
          <span className="seperator">|</span>
          <Link className="nav-link" to="/">
            comments
          </Link>
          <span className="seperator">|</span>
          <Link className="nav-link" to="/">
            ask
          </Link>
          <span className="seperator">|</span>
          <Link className="nav-link" to="/">
            show
          </Link>
          <span className="seperator">|</span>
          <Link className="nav-link" to="/">
            jobs
          </Link>
          <span className="seperator">|</span>
          <Link className="nav-link" to="/">
            summit
          </Link>
          <div className="ml-auto">
            <Link className="nav-link " to="/">
              login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
