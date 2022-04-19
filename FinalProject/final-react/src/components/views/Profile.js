import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as userService from '../../services/user';

function Profile(props) {
  const [user, setUser] = useState(0);
  const idStorage = localStorage.getItem('User');
  const id = parseInt(idStorage);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await userService.getUserById(id);
      console.log('each news data:', user);
      setUser(user.data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className="newsDetails">
        <a href="#" className="eachNews__category eachNews--common">
          ID: {user.id}
        </a>
        <h1 className="eachNews__title">{user.name}</h1>
        <p className="eachNews__description">{user.email}</p>
        <span className="updateDelete">
          <Link to={`/editUser/${user.id}`}>
            <i className="fa fa-pencil edit"></i>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Profile;
