import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../common/isLoading";
import { fetchNews } from "../../actions/news";
import NewsComponent from "./newsComponent";
import * as newsService from "../../services/news";
import Pagination from "./Pagination";

const NewsListing = () => {
  const dispatch = useDispatch();
  const news = useSelector((store) => store.news.list);

  const isLoading = useSelector((store) => store.news.isLoading);
  const isNoMore = useSelector((store) => store.news.isNoMore);

  // const inputRef = useRef();


  const [pageNumber, setPageNumber] = useState(1);
  const [newsPerPage, setnewsPerPage] = useState(50);

  const totalPages = Math.ceil(news.length / newsPerPage);

  // const observer = new IntersectionObserver((entries) => {

  //   console.log(entries);
  // });

  const lastElementRef = useCallback((node) => {
    console.log(node);
    // observer.observe(node);
  }, [])



  // const lastElementRef = useCallback(
  //   (node) => {
    
  //     const observer = new IntersectionObserver(([lastElement]) => {
  //       if (lastElement.isIntersecting && !isLoading && !isNoMore) {
  //         setPageNumber((pageNumber) => pageNumber + 1);
  //       }
  //     });

  //     if (isNoMore) {
  //       observer.disconnect();
  //     }

  //     if (node) {
  //       observer.observe(node);
  //     }
  //   },
  //   [isLoading, isNoMore]
  // );

  useEffect(() => {
      dispatch(fetchNews(news));
  }, [dispatch]);

  const indexOfLastNews = pageNumber * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const existingUser = localStorage.getItem("Token");

  return (
    <div className="newsSection">
        <button
          onClick={() =>
            pageNumber <= totalPages
              ? setPageNumber((pageNumber) => pageNumber + 1)
              : setPageNumber((pageNumber) => pageNumber == 1)
          }
        >
          Look
        </button>
        <div className="container">
          {currentNews.map((eachNews, index) =>

          index === news.length -1 ? (

          (!existingUser) ?
                  (
                    (!eachNews.isExclusive) ?
                    (
                      <div ref={lastElementRef} key={eachNews.id} className="eachNews">
                        <NewsComponent eachNews={eachNews} />
                      </div>
                    ) : (
                    index++)
                  )

                  :(
                    
                <div ref={lastElementRef} key={eachNews.id} className="eachNews">
                  <NewsComponent eachNews={eachNews} />
                </div>
              )) : (
                (!existingUser) ?
              ((!eachNews.isExclusive) ?
                (
                  <div key={eachNews.id} className="eachNews">
                    <NewsComponent eachNews={eachNews} />
                  </div>
                )
              : (index++))
            :(
                <div key={eachNews.id} className="eachNews">
                  <NewsComponent eachNews={eachNews} />
                </div>
              )

              )
          )}
          {isLoading && (
            <div className="p-relative">
              <Loading />
            </div>
          )}
        </div>
      </div>
  );
}

export default NewsListing;
