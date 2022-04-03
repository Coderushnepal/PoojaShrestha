import React, { useEffect, useState } from "react";

import * as newsService from "../../services/news"

function NewsDetails (props) {
    const [eachNews, setEachNews] = useState({});
    const { id } = props.match.params;
    console.log("I am in id section");
    console.log('eachnews =', eachNews);
  
        useEffect(() => {
        const fetchNews = async () => {
            const eachNews = await newsService.fetchNewsById(id);
            // eachNews = eachNews.data;
            setEachNews(eachNews.data);
        };
        fetchNews();
        }, []);


    return (
        <div>
            <div className="eachNews">
                <a href="#" className="eachNews__category eachNews--common">{eachNews.category}</a>
                <h1 className="eachNews__title">{eachNews.title}</h1>
                <p className="eachNews__info eachNews--common">
                <span>{eachNews.publishedDate}</span><br/>
                {/* .slice(0,10) */}
                <span>Author: {eachNews.user}</span><br/>
                <span>{eachNews.isExclusive}</span>
                </p>
                <p className="eachNews__description">{eachNews.description}</p>
            </div>

        </div>
    )
}

export default NewsDetails;