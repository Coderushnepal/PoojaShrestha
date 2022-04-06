import React from 'react';
import { Link } from 'react-router-dom';
import { USERS, NEWS } from '../../constants/routes';


const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const existingUser = localStorage.getItem('Token');

    // const handleLogout=  (e) => {
    //     e.prevent
    //     localStorage.removeItem("Token");
    //     <Link to={USERS}></Link>
    // }

    return (
        <div>
        <div className="header">
            <a href="#" className='header__hamburger'><i className="fa fa-bars fa-lg"></i></a>
            {/* <a href='#' className='header__center'><img src="images/logo.png" className='header__image'/></a> */}
            {(!existingUser) ? (
		    <Link to={USERS} className='header__user'><i className="fa fa-user fa-lg"></i></Link> ) :(
            <button className='header__user'>HI!</button>)
            }
        </div>

        <div className='secondHeader'>
            <Link to={NEWS}><h1>Exclusive Khabar</h1></Link>
            <p className='header__date'>{date}</p> 
        </div>
        
        </div>
    )
}

export default Header;

