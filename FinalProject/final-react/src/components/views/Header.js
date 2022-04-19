import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { USERS, NEWS, CREATENEWS, PROFILE } from '../../constants/routes';
// import Posts from '../../assets/images/logo.png';

const Header = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [loggedIn, setLoggedIn] = useState({});
  const [admin, setAdmin] = useState({});

  const idStorage = localStorage.getItem('User');
  const id = parseInt(idStorage);

  useEffect(() => {
    setInterval(() => {
      const existingUser = localStorage.getItem('Token');
      const admin = localStorage.getItem('Admin');
      const user = existingUser;
      setLoggedIn(user);
      setAdmin(admin);
    }, 100);
  }, []);

  const logout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('Admin');
    localStorage.removeItem('User');
  };

  return (
    <div className="header--container">
      <div className="header">
        {loggedIn ? (
          <Link to={PROFILE} className="header__hamburger">
            <i className="fa fa-user-circle-o fa-lg"></i>
          </Link>
        ) : (
          <Link to={NEWS} className="header__hamburger">
            <i className="fa fa-home fa-lg"></i>
          </Link>
        )}
        {/* <a href='#' className='header__center'><img src="images/logo.png" className='header__image'/></a> */}
        {loggedIn ? (
          <Link to={NEWS} className="header__user" onClick={logout}>
            Logout
          </Link>
        ) : (
          <Link to={USERS} className="header__user">
            <i className="fa fa-user fa-lg"></i>
          </Link>
        )}
      </div>

      <div className="secondHeader">
        <Link to={NEWS}>
          <h1>Exclusive Khabar</h1>
        </Link>
        <p className="header__date">{date}</p>
      </div>

      <div className="create-post-container">
        {admin === 'true' ? (
          <button className="createPosts">
            {' '}
            <Link to={CREATENEWS}>Create Posts</Link>{' '}
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Header;
