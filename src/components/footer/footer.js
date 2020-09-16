import React from 'react';
import Social from './social'
import Docs from './doc'
import Contact from './contact'
import './footer.css'


function Footer() {
    return(
        <div className="footer">
            <div className="imagee">
            <img src={require("../../assets/footer-presenter.svg")} alt="Presented by: DigitalOcean + Intel + Dev"/>
            </div>
            <div className='inner-footer'>
                <div className='footer-content'>
                    <Social />
                    <Docs />
                    <Contact />
                </div>

            <div className="copyright">          
            SOSC © {new Date().getFullYear()}
            </div>

        </div>
        </div>
    )
}

export default Footer