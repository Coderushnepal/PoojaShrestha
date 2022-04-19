import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import * as userService from '../../services/user';

function EditProfile() {
  const history = useHistory();

  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const idStorage = localStorage.getItem('User');
  const id = parseInt(idStorage);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await userService.getUserById(id);
      setUser(user.data);
      setEmail(user.data.email);
      setName(user.data.name);
      setPassword(user.data.password);

      console.log('fetched', user);
    };

    fetchUser();
  }, []);

  async function onUpdate(e) {
    e.preventDefault();
    const postData = {
      name: name,
      email: email,
      password: password,
    };

    const data = await userService.editUser(postData, id);
    console.log(data);
    if (data.message === 'Record updated successfully') {
      toast.success('Edited!');
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } else {
      console.log(data);
      toast.error(data);
    }
  }

  return (
    <div className="editing">
      <form className="signup-form" onSubmit={onUpdate}>
        <div className="formElements">
          <h2>Edit your data!</h2>
          <label>Name: </label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Username"
            value={name}
            name="username"
            required
          />{' '}
          <br />
          <label>Email: </label> <br />
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            value={email}
            name="email"
            required
          />{' '}
          <br />
          <label>Password : </label> <br />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Password"
            value={password}
            name="password"
            required
          />
          <br />
          <button className="button" type="submit">
            Update
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
