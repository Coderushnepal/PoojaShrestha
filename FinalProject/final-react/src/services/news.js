import axios from "axios";
import config from "../config";
import {interpolate, unParseQuery} from "../utils/string";

export const fetchNews = async () => {

    const url = `${config.apiUrl}`;
    const { data } = await axios.get(url); 
  
    return data;
};

export const fetchNewsById = async (id) => {

    const url = `${config.apiUrl}${config.endpoints.eachNews}`;
    const {data} = await axios.get(interpolate(url, {id}));
  
    return data;
}

export const deleteNewsById = async (id) => {

    const url = `${config.apiUrl}${config.endpoints.eachNews}`;
    const {data} = await axios.delete(interpolate(url, {id}));
  
    return data;
}