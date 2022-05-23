import React from 'react';

const HOC = (WrappedComponent, entity) => {
	return class extends React.Component {
		state = {};

		componentDidMount() {
			axios.post('http://127.0.01:1234/entity', postData).then((response) => {
				const { data } = response;
				console.log(data);

				if (data.message === 'Added user successfully') {
					localStorage.setItem('Token', data.data.token);
					history.push('/');
				}
			});
		}
	};
};
