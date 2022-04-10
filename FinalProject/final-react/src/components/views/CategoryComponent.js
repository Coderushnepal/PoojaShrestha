import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as categoryService from "../../services/category"
import NewsComponent from "./newsComponent";
import NewsListing from "./newsListing";

function CategoryComponent (props) {
    const category = props.eachCategory;
    console.log(category);
    const id=category.id;
    // const categoryId = eachCategory;
    const [eachCategoryHere, setEachCategoryHere] = useState({});

    useEffect(() => {
        const fetchCategory = async () => {
            const eachCategoryHere = await categoryService.fetchCategoryById(id);
            console.log('each category data:',eachCategoryHere);
            // setEachCategoryHere('data', eachCategory.data);
        };
        fetchCategory();
        }, []);

    const news = useSelector((state) => state.news.list);
    console.log(news);



    return (
        <div>
        {/* <NewsListing /> */}
        hi
        </div>
            

      
    )

    
}

export default CategoryComponent;
// {/* 
// {news.map((eachNews, index) => {
//                 {console.log(eachNews)}
//                     if(categoryId === eachNews.id) {                    
//                             {console.log(eachNews)}
//                             {console.log(eachNews.id)}
//                             return( <NewsComponent />)
//                             console.log(eachNews)
                            
//                     }
//                     else
//                     {
//                         index++;
//                     }

                
//                 })}
                


//             </div> */}
// {/* 
// // return (
//     //     <>
//     //     <NewsListing />
//     //     </>
//     // ) */}