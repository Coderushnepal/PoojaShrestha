import axios from "axios";
import config from "../config";
import {interpolate, unParseQuery} from "../utils/string";


export const getUser = async () => {
    
    const url = `${config.apiUrl}${config.endpoints.users}`;
    console.log('url', url);
    const { data } = await axios.get(url);
    return data;
};

export const signupUser = async (postData) => {

    try{

    const url = `${config.apiUrl}${config.endpoints.users}`;
    const {data} = await axios.post((url), postData);

    console.log(data);
  
    return data;
    }
    catch(err) {
        console.log(err.response);
        return (err.response.data.message);
    }
}

export const logUser = async (logData) => {

    try{

    const url = `${config.apiUrl}${config.endpoints.login}`;
    const {data} = await axios.post((url), logData);
  
    return data;
    }
    catch(err) {
        console.log(err.response);
        return (err.response.data.message);
    }
}