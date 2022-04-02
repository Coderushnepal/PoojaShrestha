import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsComponent = () => {
  const news = useSelector((store) => store.news.list);
  const { category_name, title, description, published_date, is_exclusive, user_name } =
    news[0];
  console.log(news);

  return (
    <div>
      <div className="eachNews">
        <a href="#" className="eachNews__category eachNews--common">{category_name}</a>
        <h1 className="eachNews__title">{title}</h1>
        <p className="eachNews__info eachNews--common">
          <span>{published_date}</span><br/>
          <span>Author: {user_name}</span><br/>
          <span>{is_exclusive}</span>
        </p>
        <p className="eachNews__description">{description}</p>
      </div>
    </div>
  );
};

export default NewsComponent;
