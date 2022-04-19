import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import * as userService from '../../services/user';
import { ToastContainer, toast } from 'react-toastify';

const Users = () => {
  const [userNameSign, setuserNameSign] = useState('');
  const [userEmailSign, setuserEmailSign] = useState('');
  const [userPasswordSign, setuserPasswordSign] = useState('');
  const [userEmailLog, setuserEmailLog] = useState('');
  const [userPasswordLog, setuserPasswordLog] = useState('');

  const history = useHistory();

  async function onAddUsers(e) {
    e.preventDefault();
    const postData = {
      name: userNameSign,
      email: userEmailSign,
      password: userPasswordSign,
    };

    const data = await userService.signupUser(postData);
    console.log(data);

    if (data.message === 'Added user successfully') {
      localStorage.setItem('Token', data.data.token);

      toast.success('Signed in!');
      setTimeout(() => {
        history.push('/');
        localStorage.setItem('User', data.data.user.id);
        localStorage.setItem('Admin', data.data.user.is_admin);
      }, 2000);
    } else {
      toast.error(data);
    }
  }

  async function onLogUsers(e) {
    e.preventDefault();
    const logData = {
      email: userEmailLog,
      password: userPasswordLog,
    };

    const data = await userService.logUser(logData);
    if (data.message === 'Logged in succesfully') {
      localStorage.setItem('Token', data.data.token);
      localStorage.setItem('User', data.data.user.id);
      localStorage.setItem('Admin', data.data.user.is_admin);
      toast.success('Logged in!');
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } else {
      toast.error(data);
    }
  }

  return (
    <div className="user-entry">
      <form className="signup-form" onSubmit={onAddUsers}>
        <div className="formElements">
          <h2>Signup to Exclusive Khabar!</h2>
          <label>Name: </label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setuserNameSign(e.target.value);
            }}
            placeholder="Enter Username"
            value={userNameSign}
            name="username"
            required
          />{' '}
          <br />
          <label>Email: </label> <br />
          <input
            type="email"
            onChange={(e) => {
              setuserEmailSign(e.target.value);
            }}
            placeholder="Enter Email"
            value={userEmailSign}
            name="email"
            required
          />{' '}
          <br />
          <label>Password : </label> <br />
          <input
            type="password"
            onChange={(e) => {
              setuserPasswordSign(e.target.value);
            }}
            placeholder="Enter Password"
            value={userPasswordSign}
            name="password"
            required
          />
          <br />
          <button className="button">Sign up</button>
        </div>
      </form>

      <form className="login-form" onSubmit={onLogUsers}>
        <div className="formElements">
          <h2>Login to Exclusive Khabar!</h2>
          <label>Email: </label> <br />
          <input
            type="email"
            onChange={(e) => {
              setuserEmailLog(e.target.value);
            }}
            placeholder="Enter Email"
            value={userEmailLog}
            name="email"
            required
          />{' '}
          <br />
          <label>Password : </label> <br />
          <input
            type="password"
            onChange={(e) => {
              setuserPasswordLog(e.target.value);
            }}
            placeholder="Enter Password"
            value={userPasswordLog}
            name="password"
            required
          />
          <br />
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
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
  );
};

export default Users;
