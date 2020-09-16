import React from 'react';
import './socialList'
import { socialList } from './socialList';
import './footer.css'

function Social() {
    return(
        <ul className='social box'>
                    {socialList.map((item, index ) => {
                        return(
                            <li key={index}>
                                <a className= {item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
    )
}

export default Social