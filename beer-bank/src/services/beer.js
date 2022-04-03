import axios from "axios";
import config from "../config";
import {interpolate, unParseQuery} from "../utils/string";

export const fetchBeers = async (query) => {
  console.log(query);
  const url = `${config.apiUrl}${config.endpoints.beers}${unParseQuery(query)}`;
  console.log(url);
  const { data } = await axios.get(url); 
  // accesssing the api

  return data;
};

export const fetchBeersById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.beer}`;
  console.log('url',url);

  const {data} = await axios.get(interpolate(url, {id}));
  
  console.log(data[0]);
  return data[0];
}