import React from'react';
import {Link} from 'react-router-dom';
import Logo from './../Images/Logo.png';
function Nav() {
    return (
        <>
          <div className='Logo'>
                    <img className='logo' src={Logo} alt="logo" />
                </div>

                <div className='Menu'>
                    <div> <Link to="/"> <h6>HOME</h6> </Link> </div>
                    <div> <Link to="/Products/"> <h6>SPACES</h6> </Link> </div>
                    <div> <Link to="/Services/"> <h6>PRODUCTS & SERVICES</h6> </Link></div>
                    <div> <h6>SHOWROOMS</h6></div>
                    <div> <Link to="/Why/"><h6>COMPANY</h6> </Link></div>
                    <div> <Link to="/Medias/"><h6>MEDIA</h6> </Link></div>
                    <div> <h6>Contacts</h6></div>
                </div>
        
        
        </>
    )
}


export default Nav;