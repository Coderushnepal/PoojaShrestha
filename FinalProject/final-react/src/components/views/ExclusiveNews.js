// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {fetchNews} from "../../actions/news"
// import NewsComponent from "./newsComponent";
// import * as newsService from '../../services/news'

// const ExclusiveNews =  () => {
//     const news = useSelector((state) => state.news.list);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchAllNews = async () => {
//             const eachNews = await newsService.fetchNews();

//             dispatch(fetchNews(eachNews));
//         };
//         fetchAllNews();
//     }, []);

//     return (

//         <div className="newsSection">
//             <div>

//             {console.log('Ex news', news)}
//             {news.map((eachNews, index) =>

//                 <div key={eachNews.id}>
//                 <NewsComponent eachNews={eachNews} />
//                 {console.log('index', eachNews.isExclusive)}
//                 </div>
//             )}
//         </div>
//         </div>
//     )
// }

// export default ExclusiveNews;
