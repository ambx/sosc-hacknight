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
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Prizes</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    
                </ul>
            </nav>
        )
    }

    export default Navbar