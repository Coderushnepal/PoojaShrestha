import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchCategory } from '../../actions/category';
import { useDispatch, useSelector } from 'react-redux';
import * as categoryService from '../../services/category';

function CategoryListing() {
	const dispatch = useDispatch();
	const category = useSelector((store) => store.category.list);

	useEffect(() => {
		const fetchAllCategory = async () => {
			const category = await categoryService.fetchCategory();
			dispatch(fetchCategory(category));
		};
		fetchAllCategory();
	}, []);

	return (
		<div className="category-container">
			{category.map((eachCategory, index) => (
				<div key={category.id} className="eachNews">
					<Link to={`category/${eachCategory.id}`}>
						<h1 className="eachNews__title">{eachCategory.name}</h1>
						<p className="eachNews__description">{eachCategory.description}</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export default CategoryListing;
