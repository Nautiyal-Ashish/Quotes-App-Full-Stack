import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={styles.nav}>
      <h2>Great Quotes App</h2>
      <ul>
        <li>
          <Link to="/">All quotes</Link>
        </li>
        <li>
          <Link to="/new">New quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;