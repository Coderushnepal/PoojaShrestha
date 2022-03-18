import axios from "axios";
import config from "../config";
import {interpolate} from "../utils/string";

export const fetchBeers = async (query) => {
  const url = `${config.apiUrl}${config.endpoints.beers}${unParseQuery}`;
  console.log(url);
  const { data } = await axios.get(url); 
  // accesssing the api

  return data;
};

export const fetchBeersById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.beer}`;
  console.log(url);

  const {data} = await axios.get(interpolate(url, {id}));
  

  return data[0];
}