import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsComponent from './newsComponent';
import { fetchNews } from '../../actions/news';

const NewsListing = () => {
  const dispatch = useDispatch();
  const news = useSelector((store) => store.news.list);

  const isLoading = useSelector((store) => store.news.isLoading);
  const isNoMore = useSelector((store) => store.news.isNoMore);

  const [pageNumber, setPageNumber] = useState(1);
  const [newsPerPage, setnewsPerPage] = useState(5);

  const perPage = 5;

  useEffect(() => {
    dispatch(fetchNews(news));
  }, [dispatch]);

  const [loggedIn, setLoggedIn] = useState({});

  useEffect(() => {
    setInterval(() => {
      const existingUser = localStorage.getItem('Token');
      const user = existingUser;
      setLoggedIn(user);
    }, 100);
  }, []);

  return (
    <div className="newsSection">
      {/* <button
          onClick={() => 
              pageNumber < totalPages
              ? setPageNumber((pageNumber) => pageNumber + 1)
              : setPageNumber((pageNumber) => pageNumber = 1)
          }
        >
          {console.log('no',pageNumber)}
          Look
        </button> */}

      {news.map((eachNews, index) => {
        if (loggedIn) {
          return (
            <div key={eachNews.id} className="eachNews">
              {console.log('eache', eachNews)}
              <NewsComponent eachNews={eachNews} />
            </div>
          );
        } else {
          if (eachNews.isExclusive) return '';
          else
            return (
              <div key={eachNews.id} className="eachNews">
                <NewsComponent eachNews={eachNews} />
              </div>
            );
        }
      })}
    </div>
  );
};

export default NewsListing;
