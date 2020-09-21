import React, { Component } from "react";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <nav className={styles.NavbarItem}>
      <div className={styles.navLogo}>
        <a href="#">
          <img src={require("../../assets/Icon.svg")} alt="" />
        </a>
      </div>

      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="https://devfolio.co/code-of-conductt">Code of Conduct</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
      <div className={styles.toggle}>
        <label className={styles.menu}>
          <div className={styles.hamburger}></div>
          <div className={styles.hamburger}></div>
          <div className={styles.hamburger}></div>
          <input className={styles.check} type="checkbox"></input>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
