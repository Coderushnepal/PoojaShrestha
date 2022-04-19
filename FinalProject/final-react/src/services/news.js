import axios from 'axios';
import config from '../config';
import { interpolate, unParseQuery } from '../utils/string';

const token = localStorage.getItem('Token');
console.log('token insirde', token);

export const fetchNews = async () => {
  const url = `${config.apiUrl}${config.endpoints.news}`;
  const { data } = await axios.get(url);

  return data;
};

export const fetchNewsById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.eachNews}`;

  const { data } = await axios.get(interpolate(url, { id }));
  console.log('new', data);

  return data;
};

export const postNews = async (postData) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.news}`;
    const { data } = await axios.post(url, postData, { headers: { Authorization: `Bearer ${token}` } });

    return data;
  } catch (err) {
    console.log(err);
    return err.response.data.message;
  }
};

export const editNews = async (postData, id) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.eachNews}`;
    const { data } = await axios.put(interpolate(url, { id }), postData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('edited', data);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const deleteNewsById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.eachNews}`;
  const { data } = await axios.delete(interpolate(url, { id }), { headers: { Authorization: `Bearer ${token}` } });

  return data;
};
