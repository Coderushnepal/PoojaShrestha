import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCategory} from "../../actions/category";
import * as categoryService from "../../services/category";
import CategoryComponent from "./CategoryComponent";
import { Link } from "react-router-dom";

function CategoryListing () {
    const dispatch = useDispatch();
    const category = useSelector((store) => store.category.list);
    
    console.log('category', category);

    
  
        useEffect(() => {
        const fetchAllCategory = async () => {
            const category = await categoryService.fetchCategory();
            dispatch(fetchCategory(category));
        };
        fetchAllCategory();
        }, []);

        


    return (
        <div>

            {category.map((eachCategory, index) => (

            <div key={category.id} className="eachNews">
                {/* <Link to= {<CategoryComponent eachCategory={eachCategory} />}> */}
                <h1 className="eachNews__title">{eachCategory.name}</h1> 
                <p className="eachNews__description">{eachCategory.description}</p>
                {/* </Link> */}
                <CategoryComponent eachCategory={eachCategory} />
            </div>
            
            ))}

        </div>
    )
}

export default CategoryListing;