import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../common/isLoading";
import { fetchNews } from "../../actions/news";
import NewsComponent from "./newsComponent";
import * as newsService from "../../services/news";
import Pagination from "./Pagination";

const NewsListing = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.list);

  const isLoading = useSelector((state) => state.news.isLoading);
  const isNoMore = useSelector((state) => state.news.isNoMore);

  // const inputRef = useRef();
  const [pageNumber, setPageNumber] = useState(1);
  const [newsPerPage, setnewsPerPage] = useState(50);

  const totalPages = Math.ceil(news.length / newsPerPage);
  console.log(news.length);

  useEffect(() => {
    const fetchAllNews = async () => {
      const eachNews = await newsService.fetchNews();

      dispatch(fetchNews(eachNews));
    };
    fetchAllNews();
  }, []);

  const indexOfLastNews = pageNumber * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const existingUser = localStorage.getItem("Token");

  return (
    <div className="newsSection">
      <div>
        {console.log("news", news)}

        <button
          onClick={() =>
            pageNumber <= totalPages
              ? setPageNumber((pageNUmber) => pageNumber + 1)
              : setPageNumber((pageNUmber) => pageNumber == 1)
          }
        >
          Look
        </button>
        {currentNews.map((eachNews, index) => {
          if (!existingUser) {
            if (!eachNews.isExclusive) {
              return (
                <div key={eachNews.id}>
                  <NewsComponent eachNews={eachNews} />
                </div>
              );
            } else {
              index++;
            }
          } else {
            return (
              <div key={eachNews.id}>
                <NewsComponent eachNews={eachNews} />
              </div>
            );
          }
        })}
        {isLoading && (
          <div className="p-relative">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsListing;
