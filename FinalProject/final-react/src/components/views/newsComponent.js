import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as newsService from "../../services/news";
import NewsListing from "./newsListing";
// import { Link } from "react-router-dom";
import Posts from "./EditPosts";
import { EDITNEWS } from "../../constants/routes";
import { useDispatch } from "react-redux"; 

import * as userService from "../../services/user";

const NewsComponent = (props) => {

  const eachNews = props.eachNews; 
  const index = props.index;
  const dispatch = useDispatch();

  console.log('eachNews', eachNews);

  // useEffect(() => {
  //   const fetchAllNews = async () => {
  //     const eachNews = await newsService.fetchNews();

  //     dispatch(fetchNews(eachNews));
  //   };
  //   fetchAllNews();
  // }, []);
  // const[user, setUser] = useState(false);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await userService.getUser();
  //     setUser(user.data);
  //     console.log('index',user.data[index]);
  //   };
  //   fetchUser();
  // }, []);
  // console.log('user', user);


  // const news = useSelector((store) => store.news.list);

  // const news_peek = news.description;
  // const peek = news_peek || '';
  // const news_teaser = peek ?. slice(0, 20);console
  
  // .toString().slice(0,20);



  // if(!eachNews.isExclusive) {

    // const existingUser = localStorage.getItem('Token');
    // const admin = localStorage.getItem('Admin');

    const [admin, setAdmin] = useState({});


    useEffect(() => {

        setInterval(() => {
            const existingUser = localStorage.getItem("Admin");
            const user = existingUser;
            setAdmin(user);
            }, [])
    }, 5000);
    

    const path = eachNews.id;
    console.log(admin);

  return (
    <div>

      
      <div className="eachNews">
      
        <a href="#" className="eachNews__category eachNews--common">
          {eachNews.category}
          {console.log('category', eachNews.category)}
        </a>
        
        <h1 className="eachNews__title">{eachNews.title}</h1>
        <p className="eachNews__info eachNews--common">
          <span>{eachNews.publishedDate?.slice(0, 10)}</span>
          <br />
          <span>Author: {eachNews.user}</span>
          <br />
          {(eachNews.isExclusive) ? 
          (<span>Exclusive</span>) :
          (<span>Not Exclusive</span>)
          } 
        </p>
        <p className="eachNews__description">{eachNews.description?. slice(0, 100)}<Link to={`/news/${eachNews.id}`}> ...See more</Link></p>
          {console.log(typeof(admin))}
        {(admin === "true") ? (
        <span className="updateDelete">
        <Link to={`/edit/${eachNews.id}`}><i className="fa fa-pencil edit"></i></Link>
        <Link to={`delete/${eachNews.id}`}><i className="fa fa-trash delete"></i></Link>
          </span>): (' ') }
      </div>
    </div>
  ); 
};


export default NewsComponent;
