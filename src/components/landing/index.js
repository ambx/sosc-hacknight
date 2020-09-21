import React from "react";
import styles from "./styles.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <img src={require("../../assets/Logo.svg")} alt="" />
      <h1>Hacknight</h1>
      <p>03 OCT - 04 OCT </p>
      <button type="submit">Register</button>
    </div>
  );
}

export default Hero;
