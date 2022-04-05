import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as newsService from "../../services/news";
// import { Link } from "react-router-dom";

const NewsComponent = ({ eachNews}, {index }) => {
  // const news = useSelector((store) => store.news.list);

  // const news_peek = news.description;
  // const peek = news_peek || '';
  // const news_teaser = peek ?. slice(0, 20);
  
  // .toString().slice(0,20);
  // console.log('here', news_teaser);
  // console.log(id);


  console.log("Each news:", eachNews);
  return (
    <div>
      {/* {console.log("Each news inside:", eachNews)} */}
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
          <span>{eachNews.isExclusive}</span>
        </p>
        <p className="eachNews__description">{eachNews.description?. slice(0, 100)}<Link to={`/${eachNews.id}`}> ...See more</Link></p>
      </div>
    </div>
  );
};

export default NewsComponent;
