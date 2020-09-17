import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import styles from './styles.module.scss'

function Navbar() {

        return(
            <nav className={styles.NavbarItem}>

                

                <ul>
                    <li className={styles.NavLogo}>
                    <a  href="#"> 
                        <img src={require('../../assets/Icon.svg')} alt=""/>
                    </a>
                    </li>
                    {MenuItems.map((item, index ) => {
                        return(
                            <li key={index}>
                                <a className= {item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }

    export default Navbar