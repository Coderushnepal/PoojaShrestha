import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsComponent from "./newsComponent";


const NewsListing =  () => {
    const news = useSelector((store) => store.news.list);
 

    return (
        <div>
            <NewsComponent />
        </div>
    )
}

export default NewsListing;