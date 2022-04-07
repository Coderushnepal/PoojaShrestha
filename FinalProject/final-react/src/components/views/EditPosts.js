import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import * as newsService from "../../services/news";
import { useSelector } from 'react-redux';
import config from '../../config';
import {interpolate} from "../../utils/string";


function Posts(props) {

    const history = useHistory();

    const [eachNews, setEachNews] = useState({});
    const { id } = props.match.params;

    useEffect(() => {
        const fetchNews = async () => {
            const eachNews = await newsService.fetchNewsById(id);
            setEachNews(eachNews.data);
            setTitle(eachNews.data.title);
            setDescription(eachNews.data.description);
            // setIsExclusive(eachNews.data.isExclusive);
            // setUser(eachNews.data.user);
            setCategory(eachNews.data.category);
        };

        fetchNews();
    }, []);


    const newtitle = eachNews.title;
    
    const [category, setCategory] = useState('');
    // const [categoryId, setCategoryId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isExclusive, setIsExclusive] = useState(false);
    // const [userId, setUserId] = useState('');
    // const [user, setUser] = useState('');


  function onPost(e) {
    e.preventDefault();
    const postData = {
    //   categoryId: categoryId,
      title: title,
      description: description,
      isExclusive: isExclusive,
    //   userId: userId
    };

    const url = `${config.apiUrl}${config.endpoints.eachNews}`;


    axios
      .put((interpolate(url, {id})), postData)
      .then((response) => {
        const {data} = response;


        if (data.message === "Record updated successfully") {
 
            toast.success("Did it !");
            setTimeout(() => {  history.push("/"); }, 2000);
        }
        else {
            toast.error(response);
        }


      })
      .catch((err)=> {

        toast.error('Something is wrong!');
      });
  }


  

  return (
    <div>
      
        <form onSubmit={onPost}>
        <div className="formElements">
          <h2>Post to Exclusive Khabar!</h2>
          <label>Category: {category}</label> <br /><br/>
          {/* <input
            type="number"
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
           placeholder="Enter CategoryId"
            value={categoryId}
            name="categoryId"
            optional
          />
          <br /> */}
          <label>Title : </label> <br />
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Title"
            value={title}
            name="title"
            required
          />

        <br />
          <label>Description : </label> <br />
          <input
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Enter Description"
            value={description}
            name="description"
            required
          />
          <br/>
          <label>Exclusive: </label>
          <input
            type="radio"
            onChange={(e) => {
              setIsExclusive(e.target.value);
            }}
            placeholder="Enter Exclusive"
            value={true}
            name="isExclusive"
            required
          />
          <br />
          <label>Not Exclusive: </label>
          <input
            type="radio"
            onChange={(e) => {
              setIsExclusive(e.target.value);
            }}
            placeholder="Enter Exclusive"
            value={false}
            name="isExclusive"
            required
          />
          <br/>
          {/*<label>User : {user}</label> <br />
          <input
            type="text"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            placeholder="Enter UserId"
            value={userId}
            name="userId"
            required
          /> */}
          
          <br />
          <button type="submit">Update</button>
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
  )
}

export default Posts;
