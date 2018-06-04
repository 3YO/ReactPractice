import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';


const header = (props) => (

    <header >
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <a className = "nav-link"><span className="text-light"> rc logo </span></a>
          
            < div className = "collapse navbar-collapse" >
                < ul className = "navbar-nav" >
                    <li className = "nav-item" >
                        < NavLink exact to="/" className = "nav-link"> My Apps </NavLink>
                    </li>
                    < li className = "nav-item" > 
                        < NavLink exact to="/profile" className = "nav-link"> Profile </NavLink>
                     </li>
                    < li className = "nav-item" > <a className="nav-link">Logout</a> </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default header;