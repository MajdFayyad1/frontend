import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";
import ReorderIcon from '@mui/icons-material/Reorder'
import logo from '../Assets/download.png'
const NavBar = () => {

    const [openLinks , setOpenLinks] = useState(false);
    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    };

    return(
            <div className="navBar">
                <button onClick={toggleNavbar} className="btn-primary"> <ReorderIcon/> </button>

                <div className="rightSide">
                    {openLinks ? 
                    <div className="card-title">
                        <Link to='/Home'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Contact'>Contact</Link>
                        <Link to='/Add'>Login</Link>
                    </div>
                     : 
                    <Link to='/'><img src={logo} alt="not fount"></img></Link>
                    }

                    
                </div>
            </div>
    );
}
export default NavBar