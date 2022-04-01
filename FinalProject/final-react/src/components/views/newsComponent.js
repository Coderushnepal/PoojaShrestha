import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsComponent =  () => {
    const news = useSelector((store) => store.news.list);
    const {title, description, user_id, published_date} = news[0];
    console.log(news);

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{user_id}</p>
            <p>date:{published_date}</p>
        </div>
    )
}

export default NewsComponent;