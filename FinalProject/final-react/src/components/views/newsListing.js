import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../common/Loading";
import { fetchNews } from "../../actions/news";
import NewsComponent from "./newsComponent";
import * as newsService from "../../services/news";
import Pagination from "./Pagination";

const NewsListing = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.list);
  console.log('news', news);

  const isLoading = useSelector((state) => state.news.isLoading);
  const isNoMore = useSelector((state) => state.news.isNoMore);

  const [pageNumber, setPageNumber] = useState(1);
  const [newsPerPage, setnewsPerPage] = useState(100);

//   const lastElementRef = useCallback(
//       (node) => {
//         const observer = new IntersectionObserver(([lastElement]) => {
//           if (lastElement.isIntersecting && !isLoading && !isNoMore) {
//             setPageNumber((pageNumber) => pageNumber + 1);
//           }
//         });

//         console.log('node inside', node);
//         console.log('nomore', isNoMore);

//         if (isNoMore) {
//           observer.disconnect();
//         }

//         if (node) {
//           observer.observe(node);
//         }
//       },
//       [isLoading, isNoMore]
//     );

  useEffect(() => {
    const fetchAllNews = async () => {
      const eachNews = await newsService.fetchNews();
      // console.log('news here:', eachNews);
      dispatch(fetchNews({ eachNews, pageNumber }));
    };
    fetchAllNews();
  }, [dispatch, pageNumber]);

  const indexOfLastNews = pageNumber * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const lastElementRef = useCallback(
    (node) => {
      const observer = new IntersectionObserver((lastElement) => {
        console.log("element", lastElement);
      });

      observer.observe(node);
      console.log("node", node);
    },
    [isLoading]
  );

  console.log("last element ref", lastElementRef);

  function handleSearch() {
    console.log(lastElementRef);
  }

  return (
    <div className="newsSection">
      <div className="demo">
        <button onClick={handleSearch}>Look</button>
        

        {currentNews.map((eachNews, index) =>{
           return(
            
            index === currentNews.length - 1 ? (
                
                <div ref={lastElementRef} key={eachNews.id}>
                    {console.log('current news', currentNews)}
                <NewsComponent eachNews={eachNews} />
                </div>
            ) : (
                <div key={eachNews.id}>
                <NewsComponent eachNews={eachNews} />
                </div>
            ))}
        )}
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
