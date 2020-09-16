import React from 'react';
import {Sponsors} from './sponsorsList'
import './sponsors.css'

function SponsorCard(){
    return(
            <ul className='sponsors'>
                    {Sponsors.map((item, index ) => {
                        return(
                            <li key={index}>
                                <a className= {item.cName} href={item.url}>
                                    <img src={item.logo} alt={item.title}/>
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
    )
}

export default SponsorCard