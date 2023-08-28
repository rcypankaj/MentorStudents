// Navbar.js
import React from "react";
import classes from "./Navbar.module.css";
import { Form, Link, useRouteLoaderData } from "react-router-dom";

const Navbar = () => {
  const token = useRouteLoaderData("root");
  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-container"]}>
        <ul className={classes["navbar-list"]}>
          <li className={classes["navbar-item"]}>
            <Link to="/" className={classes["navbar-link"]}>
              Home
            </Link>
          </li>
          <li className={classes["navbar-item"]}>
            {!token && (
              <Link to="/auth?mode=login" className={classes["navbar-link"]}>
                Login
              </Link>
            )}
            {token && (
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
