import axios from "axios";
import config from "../config";
import {interpolate, unParseQuery} from "../utils/string";

export const fetchNews = async () => {
   
    
    const url = `${config.apiUrl}`;
    // console.log('url', url);
    const { data } = await axios.get(url); 
    // .$(unParseQuery(query))
    // console.log(data);
    // accesssing the api
  
    return data;
};

export const fetchNewsById = async (id) => {
    console.log(id);
    const url = `${config.apiUrl}${config.endpoints.eachNews}`;
    // console.log('url', url);
  
    const {data} = await axios.get(interpolate(url, {id}));
    console.log('data: ',data);
  
    return data;
}