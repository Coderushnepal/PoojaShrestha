import axios from "axios";
import config from "../config";
import {interpolate, unParseQuery} from "../utils/string";

export const fetchCategory = async () => {

    const url = `${config.apiUrl}${config.endpoints.category}`;
    const { data } = await axios.get(url); 
  
    return data;
};

// export const fetchCategoryById = async (id) => {

//     const url = `${config.apiUrl}${config.endpoints.eachCafetchCategory}`;
//     const {data} = await axios.get(interpolate(url, {id}));
//     console.log('data: ',data);
  
//     return data;
// }