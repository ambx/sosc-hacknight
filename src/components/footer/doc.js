import React from 'react';
import {doc} from './docList'

function Docs(){
    return(
        <div className="docs box">
            <ul>
                    {doc.map((item, index ) => {
                        return(
                            <li key={index}>
                                <a className= {item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
    )
}

export default Docs