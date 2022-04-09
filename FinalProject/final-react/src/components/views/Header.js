import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { USERS, NEWS, CREATENEWS } from '../../constants/routes';
import Posts from './Posts';


const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [loggedIn, setLoggedIn] = useState({});


    useEffect(() => {

        setInterval(() => {
            const existingUser = localStorage.getItem("Token");
            const user = existingUser;
            setLoggedIn(user);
            
    }, 100)
}, []);

    const logout = () => {

            localStorage.removeItem("Token");
            localStorage.removeItem("Admin")
    }

    return (
        <div>
        <div className="header">
            <a href="#" className='header__hamburger'><i className="fa fa-bars fa-lg"></i></a>
            {/* <a href='#' className='header__center'><img src="images/logo.png" className='header__image'/></a> */}
            {(loggedIn) ? (<Link className='header__user' onClick={logout}>Logout</Link>) :(
		    <Link to={USERS} className='header__user'><i className="fa fa-user fa-lg"></i></Link> )
            }
        </div>

        <div className='secondHeader'>
            
            <Link to={NEWS}><h1>Exclusive Khabar</h1></Link>
            <p className='header__date'>{date}</p> 
        </div>

        <div>
        {(loggedIn) ? (<button className='createPosts'> <Link to={CREATENEWS}>Create Posts</Link> </button>) : ('')}
        </div>
        
        </div>
    )
}

export default Header;

