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
                        <a href="">Code of Conduct</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    
                </ul>
            </nav>
        )
    }

    export default Navbar