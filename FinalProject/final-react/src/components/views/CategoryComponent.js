import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as categoryService from "../../services/category"
import NewsComponent from "./newsComponent";
import NewsListing from "./newsListing";

function CategoryComponent ({eachCategory}) {
    console.log('props', eachCategory.id);
    const categoryId = eachCategory.id;
    // const [eachCategorylist, setEachCategorylist] = useState({});

    const news = useSelector((state) => state.news.list);
    console.log(news);



    return (
        <div>
        <NewsListing />
        </div>
            

      
    )

    
}

export default CategoryComponent;
{/* 
{news.map((eachNews, index) => {
                {console.log(eachNews)}
                    if(categoryId === eachNews.id) {                    
                            {console.log(eachNews)}
                            {console.log(eachNews.id)}
                            return( <NewsComponent />)
                            console.log(eachNews)
                            
                    }
                    else
                    {
                        index++;
                    }

                
                })}
                


            </div> */}
{/* 
// return (
    //     <>
    //     <NewsListing />
    //     </>
    // ) */}