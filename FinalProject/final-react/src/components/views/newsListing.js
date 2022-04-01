import React from "react";
import { useDispatch } from "react-redux";


const NewsListing =  () => {
    const dispatch = useDispatch();
    console.log(dispatch);
    console.log('here');
    return (
        <div>
            <h1>NewsListing</h1>
        </div>
    )
}

export default NewsListing;