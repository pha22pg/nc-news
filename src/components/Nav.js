import {Link} from "react-router-dom";
import {useEffect, useState} from 'react'
import React from 'react'

function Nav(){
    const [click, setClick] = useState(true);
    const [menuShowing, setMenuShowing] = useState(false);

    const clickHandler = () => {
        setMenuShowing(!menuShowing);
    }
  
    return <nav className="nav">
        <Link className="nav-item" to="/"> Home</Link>
        <div onClick={clickHandler} className="nav-item dropdown-link" to="/article"> Topics 
        
            <div  className={menuShowing ? 'dropdown-menu-container' : 'dropdown-menu-container hide'}>
                

                    <div className='topic-link-dropdown-menu-item'>
                    <Link to='/topics/cooking' >
                        Cooking
                    </Link>
                    </div>
                    <div className='topic-link-dropdown-menu-item'>
                    <Link to='/topics/coding'>
                        Coding
                    </Link>
                    </div>
                    <div className='topic-link-dropdown-menu-item'>
                    <Link to='/topics/football'>
                        Football
                    </Link>
                    </div>

              
            </div>

        </div>
   
        
        <Link className="nav-item" to="/articles"> Articles</Link>
        <Link className="nav-item" to="/users"> Users</Link>
    </nav>
}

export default Nav;




