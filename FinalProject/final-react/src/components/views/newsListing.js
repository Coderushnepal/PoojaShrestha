import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {fetchNews} from "../../actions/news"
import NewsComponent from "./newsComponent";
import * as newsService from '../../services/news'


const NewsListing =  () => {
    const news = useSelector((state) => state.news.list);
    // console.log('dispatching', news);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllNews = async () => {
            const eachNews = await newsService.fetchNews();
            // console.log('news here:', eachNews);
            dispatch(fetchNews(eachNews));
        };
        fetchAllNews();
    }, []);
    // console.log('dispatching', news);
    


    return (

        <div className="newsSection">
            <div>

            {console.log('news', news)}
            {news.map((eachNews, index) =>
                <div key={eachNews.id}>
                <NewsComponent eachNews={eachNews} />
                {console.log('index', index)}
                </div>
                
        )}
        </div>
        </div>
    )
}

export default NewsListing;

