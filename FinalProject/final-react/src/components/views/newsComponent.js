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

  const [admin, setAdmin] = useState({});


    useEffect(() => {

        setInterval(() => {
            const existingUser = localStorage.getItem("Admin");
            const admin = existingUser;
            setAdmin(admin);
            }, 100)
    }, []);
    

    const path = eachNews.id;

  return (

      <>
      
        {/* <a href="#" className="eachNews__category eachNews--common"> */}
          {eachNews.category}
        {/* </a> */}
        
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

        {(admin === "true") ? (
        <span className="updateDelete">
        <Link to={`/edit/${eachNews.id}`}><i className="fa fa-pencil edit"></i></Link>
        <Link to={`delete/${eachNews.id}`}><i className="fa fa-trash delete"></i></Link>
          </span>): ('') }
      </>
   
  ); 
};


export default NewsComponent;
