import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as newsService from "../../services/news";
import NewsListing from "./newsListing";
// import { Link } from "react-router-dom";

const NewsComponent = (props) => {
  console.log('dfd',props);
  const eachNews = props.eachNews; 
  const index = props.index;
  // const news = useSelector((store) => store.news.list);

  // const news_peek = news.description;
  // const peek = news_peek || '';
  // const news_teaser = peek ?. slice(0, 20);console
  
  // .toString().slice(0,20);



  // if(!eachNews.isExclusive) {

    const existingUser = localStorage.getItem('Token');

  return (
    <div>

      
      <div className="eachNews">
      
        <a href="#" className="eachNews__category eachNews--common">
          {eachNews.category}
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
          {console.log('ex', eachNews.isExclusive)}
        </p>
        <p className="eachNews__description">{eachNews.description?. slice(0, 100)}<Link to={`/news/${eachNews.id}`}> ...See more</Link></p>
      </div>
    </div>
  ); 
  // } 
  // else {
  //   <NewsListing />
  // }
};


export default NewsComponent;
