import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import './Navbar.css'

function Navbar() {

        return(
            <nav className="NavbarItem">

                

                <ul>
                    <li className='nav-logo'>
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