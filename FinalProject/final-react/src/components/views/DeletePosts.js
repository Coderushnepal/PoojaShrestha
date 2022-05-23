import axios from 'axios';
import config from '../../config';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { interpolate } from '../../utils/string';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import NewsListing from './newsListing';

function DeletePosts(props) {
	const history = useHistory();

	const { id } = props.match.params;

	const url = `${config.apiUrl}${config.endpoints.eachNews}`;

	useEffect(() => {
		const deleteNews = async () => {
			axios
				.delete(interpolate(url, { id }))
				.then((response) => {
					const { data } = response;

					if (data.message === 'Record removed successfully') {
						toast.success('Deleted!');
						setTimeout(() => {
							history.push('/');
						}, 2000);
					} else {
						toast.error(response);
						console.log('oops', response);
					}
				})
				.catch((err) => {
					console.log('err', err);
					toast.error('Something is wrong!');
				});
		};

		deleteNews();
	}, []);

	return (
		<>
			<NewsListing />
			<ToastContainer limit={1} />
		</>
	);
}

export default DeletePosts;
