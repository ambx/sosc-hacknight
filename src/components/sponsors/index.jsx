import React from "react";
import styles from "./styles.module.scss";
import { sponsorsList } from "./sponsorsList";

function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <a className={styles.sponsorBtn} href=""><h2>Sponsor Us</h2></a>
      <h1>Our Previous Sponsors</h1>

      <ul className={styles.sponsorItem}>
        {sponsorsList.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>
                <img src={item.logo} alt={item.title} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sponsors;
