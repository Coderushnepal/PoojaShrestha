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

  const perPage = 5;

  

  const observer = new IntersectionObserver(([lastElement]) => {
    if (lastElement.isIntersecting) {
              // setPageNumber((pageNumber) => pageNumber + 1);
            }

            console.log(lastElement);
 
  });

  const lastElementRef = useCallback((node) => {
    if(node){
    observer.observe(node);}
  }, [])

  

  useEffect(() => {
      dispatch(fetchNews(news));
  }, [dispatch]);

  // const indexOfLastNews = pageNumber * newsPerPage;
  // const indexOfFirstNews = indexOfLastNews - newsPerPage;
  // const news = news.slice(indexOfFirstNews, indexOfLastNews);

  // const totalPages = Math.ceil(news.length / newsPerPage);
  // console.log('total pages', totalPages);
  // console.log('length', news.length);
  // console.log('pages', totalPages);



  const [loggedIn, setLoggedIn] = useState({});


  useEffect(() => {

      setInterval(() => {
          const existingUser = localStorage.getItem("Token");
          const user = existingUser;
          setLoggedIn(user);
          
  }, 100)
}, []);


// const lastElementRef = useEffect(
//   (node) => {
  
//     const observer = new IntersectionObserver(([lastElement]) => {
      
//       if (lastElement.isIntersecting && !isLoading && !isNoMore) 
//       console.log('page', pageNumber);
//       console.log('total', totalPages);{
//         setInterval(() => {
          
//           pageNumber < totalPages
//             ? setPageNumber((pageNumber) => pageNumber = pageNumber+1)
//             : setPageNumber((pageNumber) => pageNumber = 1)
//         }, 5000)
        
//       }
//     });

//     if (isNoMore) {
//       observer.disconnect();
//     }

//     if (node) {
//       observer.observe(node);
//     }
//   },
//   [dispatch, isLoading, isNoMore]
// );




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

          
      if(index === news.length -1) { 
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
  );
};

export default NewsListing;