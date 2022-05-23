import React, { useEffect, useState } from 'react';
import * as newsService from '../../services/news';

function NewsDetails(props) {
	const [eachNews, setEachNews] = useState({});
	const { id } = props.match.params;

	console.log(props);

	console.log('eachnews =', eachNews);

	useEffect(() => {
		const fetchNews = async () => {
			const eachNews = await newsService.fetchNewsById(id);
			console.log('each news data:', eachNews.data);
			setEachNews(eachNews.data);
		};
		fetchNews();
	}, []);

	return (
		<div>
			<div className="newsDetails">
				<a href="#" className="eachNews__category eachNews--common">
					{eachNews.category}
				</a>
				<h1 className="eachNews__title">{eachNews.title}</h1>
				<p className="eachNews__info eachNews--common">
					<span>{eachNews.publishedDate?.slice(0, 10)}</span>
					<br />
					{/* .slice(0,10) */}
					<span>Author: {eachNews.user}</span>
					<br />
					<span>{eachNews.isExclusive}</span>
				</p>
				<p className="eachNews__description">{eachNews.description}</p>
			</div>
		</div>
	);
}

export default NewsDetails;
