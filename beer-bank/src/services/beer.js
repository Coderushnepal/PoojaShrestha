import axios from "axios";
import config from "../config";
import pinterpolate from 'pinterpolate';

export const fetchBeers = async () => {
  const url = `${config.apiUrl}${config.endpoints.beers}`;
  console.log(url);
  const { data } = await axios.get(url); 
  // accesssing the api

  return data;
};

export const fetchBeersById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.beer}`;
  console.log(url);

  const {data} = await axios.get(pinterpolate(url, {id}));
  

  return data[0];
}