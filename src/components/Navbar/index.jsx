import React, { Component } from 'react';
import styles from './styles.module.scss'

function Navbar() {

        return(
            <nav className={styles.NavbarItem}>

                <ul>
                    <li className={styles.navLogo}>
                    <a  href="#"> 
                        <img src={require('../../assets/Icon.svg')} alt=""/>
                    </a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="https://devfolio.co/code-of-conduct">Code of Conduct</a>
                    </li>
                    <li>
                        <a href="#footer">Contact</a>
                    </li>
                    
                </ul>
            </nav>
        )
    }

    export default Navbar