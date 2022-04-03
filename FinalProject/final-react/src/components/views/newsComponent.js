import React from "react";
import { useSelector } from "react-redux";
import * as newsService from "../../services/news";
// import { Link } from "react-router-dom";

const NewsComponent = ({eachNews}) => {
  const news = useSelector((store) => store.news.list);

  // const news_peek = news.description;
  // const peek = news_peek || '';
  // const news_teaser = peek ?. slice(0, 20);
  
  // .toString().slice(0,20);
  // console.log('here', news_teaser);

  console.log("Each news:", eachNews.title);
  return (
    <div>
      <div className="eachNews">
        <a href="#" className="eachNews__category eachNews--common">
          {eachNews.category_name}
        </a>
        <h1 className="eachNews__title">{eachNews.title}</h1>
        <p className="eachNews__info eachNews--common">
          <span>{eachNews.published_date}</span>
          <br />
          <span>Author: {eachNews.user_name}</span>
          <br />
          <span>{eachNews.is_exclusive}</span>
        </p>
        <p className="eachNews__description">{eachNews.description}</p>
      </div>
    </div>
  );
};

export default NewsComponent;
