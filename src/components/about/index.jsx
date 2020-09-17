import React from 'react';
import styles from './styles.module.scss'

function About(){
    return(
        <div className={styles.main}>
                    <h1>About</h1><br/>

        <div className={styles.about}>

            <div className={styles.content}>
                
                <p>Open source is changing the world - <span className={styles.boldText}>one pull request</span> at a time. <br></br>
                <span className={styles.boldText}>Hack Night </span>
                 is a 
                 <span className={styles.boldText}> 28-hour </span>
                  long hackthon organized by 
                   <a  href="https://sosc.org.in/"> Sahyadri Open Source Community (SOSC) </a>
                   in celebration of Hacktoberfest 2020. 
                   <a  href="https://hacktoberfest.digitalocean.com/"> Hacktoberfest </a>
                    is open to everyone in our global community. Whether you’re new to development, a student or a long-time contributor, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skills levels are encouraged to complete the challenge.
                    Explore SOSC’s annual flagship event, 
                    <a  href="https://devhost2020.tech/"> devhost:20</a>.</p>
            </div>
            
            <div className="image">
            <img className={styles.consoleImg} src={require("../../assets/about.svg")} alt="Oops"/>
            </div>
        </div>
        </div>
    )
}
export default About