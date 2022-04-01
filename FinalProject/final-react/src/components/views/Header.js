import React from 'react';


const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div>
        <div className="header">
            <a href="#" className='header__hamburger'><i className="fa fa-bars fa-2x"></i></a>
            {/* <a href='#' className='header__center'><img src="images/logo.png" className='header__image'/></a> */}
		    <a href="#" className='header__user'><i className="fa fa-user fa-2x"></i></a>
        </div>

        <div className='secondHeader'>
            <h1>Exclusive Khabar</h1>
            <p className='header__date'>{date}</p> 
        </div>
        
        </div>
    )
}

export default Header;

