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
  const [newsPerPage, setnewsPerPage] = useState(5);

  

  // const observer = new IntersectionObserver(([lastElement]) => {
  //   if (lastElement && lastElement.isIntersecting) {
  //             setPageNumber((pageNumber) => pageNumber + 1);
  //           }

  //           console.log(lastElement);
 
  // });

  // const lastElementRef = useCallback((node) => {
  //   if(node){
  //   observer.observe(node);}
  // }, [])

  

  const lastElementRef = useCallback(
    (node) => {
    
      const observer = new IntersectionObserver(([lastElement]) => {
        if (lastElement.isIntersecting && !isLoading && !isNoMore) {
          setPageNumber((pageNumber) => pageNumber + 1);
        }
      });

      if (isNoMore) {
        observer.disconnect();
      }

      if (node) {
        observer.observe(node);
      }
    },
    [isLoading, isNoMore]
  );

  useEffect(() => {
      dispatch(fetchNews(news));
  }, [dispatch]);

  const indexOfLastNews = pageNumber * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(news.length / newsPerPage);
  console.log('pages', totalPages);
  console.log('length', news.length);
  console.log('peages', totalPages);



  const [loggedIn, setLoggedIn] = useState({});


//   useEffect(() => {

//       setInterval(() => {
//           const existingUser = localStorage.getItem("Token");
//           const user = existingUser;
//           setLoggedIn(user);
          
//   }, 100)
// }, []);



  return (
    <div className="newsSection">
      <div>

        <button
          onClick={() => 
              pageNumber < totalPages
              ? setPageNumber((pageNumber) => pageNumber + 1)
              : setPageNumber((pageNumber) => pageNumber == 1)
          }
        >
          {console.log('no',pageNumber)}
          Look
        </button>
        {currentNews.map((eachNews, index) => {

          
      if(index === currentNews.length -1) { 
          if (loggedIn){
            return(
              <div ref={lastElementRef} key={eachNews.id} className="eachNews">
                  <NewsComponent eachNews={eachNews} />
                </div>
            )
          }
          else {
            if(eachNews.isExclusive) 
              return('') 
            else return(
              <div ref={lastElementRef} key={eachNews.id} className="eachNews">
                  <NewsComponent eachNews={eachNews} />
                </div>
            )
          }
        }
        else {
          if (loggedIn){
            return(
              <div key={eachNews.id} className="eachNews">
                  <NewsComponent eachNews={eachNews} />
                </div>
            )
          }
          else {
            if(eachNews.isExclusive) 
              return('') 
            else return(
              <div key={eachNews.id} className="eachNews">
                  <NewsComponent eachNews={eachNews} />
                </div>
            )
          }
        }

          
          })}
        {isLoading && (
          <div className="eachNews p-relative">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsListing;