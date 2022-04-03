import React from "react";
import { useSelector } from "react-redux";
import NewsComponent from "./newsComponent";


const NewsListing =  () => {
    const news = useSelector((store) => store.news.list);
    // console.log(news[0]);


    return (

        <div className="newsSection">
            <div>
  
            {news.map((eachNews, index) =>
                index === news.length - 1 ? (
                    <div key={eachNews.id}>
                    <NewsComponent eachNews={eachNews} />
                    </div>
                ) : (
                    <div key={eachNews.id}>
                    <NewsComponent eachNews={eachNews} />
                    </div>
                )
        )}
        </div>
        </div>
    )
}

export default NewsListing;