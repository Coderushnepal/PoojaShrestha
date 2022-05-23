import axios from 'axios';
import config from '../config';
import { interpolate, unParseQuery } from '../utils/string';

const token = localStorage.getItem('Token');
console.log('token insirde', token);

export const getUser = async () => {
	const url = `${config.apiUrl}${config.endpoints.users}`;
	console.log('url', url);
	const { data } = await axios.get(url);
	return data;
};

export const getUserById = async (id) => {
	const url = `${config.apiUrl}${config.endpoints.eachUser}`;

	const { data } = await axios.get(interpolate(url, { id }));

	return data;
};

export const signupUser = async (postData) => {
	try {
		const url = `${config.apiUrl}${config.endpoints.users}`;
		const { data } = await axios.post(url, postData);

		console.log(data);

		return data;
	} catch (err) {
		console.log(err.response);
		return err.response.data.message;
	}
};

export const logUser = async (logData) => {
	try {
		const url = `${config.apiUrl}${config.endpoints.login}`;
		const { data } = await axios.post(url, logData, { headers: { Authorization: `Bearer ${token}` } });

		return data;
	} catch (err) {
		console.log(err.response);
		return err.response.data.message;
	}
};

export const editUser = async (postData, id) => {
	try {
		const url = `${config.apiUrl}${config.endpoints.eachUser}`;
		const { data } = await axios.put(interpolate(url, { id }), postData, {
			headers: { Authorization: `Bearer ${token}` },
		});
		console.log('edited', data);

		return data;
	} catch (err) {
		return err.response.data.message;
	}
};
