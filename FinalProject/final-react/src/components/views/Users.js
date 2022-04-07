import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom"

const Users = () => {
  const [userNameSign, setuserNameSign] = useState("");
  const [userEmailSign, setuserEmailSign] = useState("");
  const [userPasswordSign, setuserPasswordSign] = useState("");

  const [userEmailLog, setuserEmailLog] = useState("");
  const [userPasswordLog, setuserPasswordLog] = useState("");

  const history = useHistory()

  function onAddUsers(e) {
    e.preventDefault();
    const postData = {
      name: userNameSign,
      email: userEmailSign,
      password: userPasswordSign,
    };

    axios
      .post("http://127.0.01:1234/users", postData)
      .then((response) => {
        const {data} = response;
        console.log(data);

        if (data.message === "Added user successfully") {
          localStorage.setItem("Token", data.data.token);
          history.push("/");
        }


      });
  }

 
  function onLogUsers(e) {
    e.preventDefault();
    const logData = {
      email: userEmailLog,
      password: userPasswordLog,
    };

    axios
      .post("http://127.0.01:1234/login", logData)
      .then((response) => {
        const {data} = response;
        console.log(data.message);

        if (data.message === "Logged in succesfully") {
          localStorage.setItem("Token", data.data.token);
          history.push("/");

        }
      })

      
    
    };

  return (
    <>
      <form onSubmit={onAddUsers}>
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
          />{" "}
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
          />{" "}
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
          <button>Sign up</button>
        </div>
      </form>

      <form onSubmit={onLogUsers}>
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
          />{" "}
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
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Users;
