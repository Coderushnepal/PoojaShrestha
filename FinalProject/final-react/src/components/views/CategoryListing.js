import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as categoryService from "../../services/category"

function CategoryListing () {
    // const category = useSelector((state) => state.category.list);

    // const { id } = props.match.params;
   
    // console.log('eachcategory =', eachNews);
  
        useEffect(() => {
        const fetchCategory = async () => {
            const category = await categoryService.fetchCategory();
            console.log(category.data);
        };
        fetchCategory();
        }, []);

        


    return (
        <div>
            <div className="eachNews">
                {/* <h1 className="eachNews__title">{name}</h1>
                <p className="eachNews__info eachNews--common">
                <span>{eachNews.publishedDate?.slice(0,10)}</span><br/>
                {/* .slice(0,10) */}
                {/*<span>Author: {eachNews.user}</span><br/>
                <span>{eachNews.isExclusive}</span>
                </p>
                <p className="eachNews__description">{eachNews.description}</p> */}

                Hi
            </div>

        </div>
    )
}

export default CategoryListing;