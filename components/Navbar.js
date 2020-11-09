import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'




function Navbar() {
  
    return (
        
        <div className='navbar'>
            <div className="navbar-container container">
                    {/*NAVBAR LOGO*/}
                    <Link to='./Home.js' className='navbar-logo'>
                        CODIGOTECH
                    </Link>

                {/*NAVBAR MENU*/}
                

                <ul>
                    <li className='nav-item'>
                        <Link to='/Home.js' className='nav-links' style={{color: 'black'}}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Services.js' className='nav-links'  style={{color: 'black'}}>
                            SERVICES
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/About.js' className='nav-links'  style={{color: 'black'}}>
                            ABOUT
                        </Link>
                    </li>
                   
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar;

