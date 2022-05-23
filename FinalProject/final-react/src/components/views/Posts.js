import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import * as newsService from '../../services/news';

function Posts() {
	const [categoryId, setCategoryId] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isExclusive, setIsExclusive] = useState(false);
	const [userId, setUserId] = useState('');

	const history = useHistory();

	async function onPost(e) {
		e.preventDefault();
		const postData = {
			categoryId: categoryId,
			title: title,
			description: description,
			isExclusive: isExclusive,
			userId: userId,
		};

		const data = await newsService.postNews(postData);

		if (data.message === 'Added record successfully') {
			toast.success('Posted !');
			setTimeout(() => {
				history.push('/');
			}, 2000);
		} else {
			toast.error(data);
		}
	}

	const category = useSelector((store) => store.category.list);

	return (
		<div className="creating">
			<form className="create-post-form" onSubmit={onPost}>
				<div className="formElements">
					<h2>Post to Exclusive Khabar!</h2>
					<label>Category Id: </label> <br />
					<input
						type="number"
						onChange={(e) => {
							setCategoryId(e.target.value);
						}}
						placeholder="Enter category Id"
						value={categoryId}
						name="categoryId"
						required
					/>
					<br />
					<label>Title : </label> <br />
					<input
						type="text"
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						placeholder="Enter Title"
						value={title}
						name="title"
						required
					/>
					<br />
					<label>Description : </label> <br />
					<textarea
						maxLength={1000}
						rows={10}
						type="text"
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						placeholder="Enter Description"
						value={description}
						name="description"
						required
					></textarea>
					<br />
					<label>Exclusive: </label>
					<input
						type="radio"
						onChange={(e) => {
							setIsExclusive(e.target.value);
						}}
						placeholder="Enter Exclusive"
						value={true}
						name="isExclusive"
						required
					/>
					<br />
					<label>Not Exclusive: </label>
					<input
						type="radio"
						onChange={(e) => {
							setIsExclusive(e.target.value);
						}}
						placeholder="Enter Exclusive"
						value={false}
						name="isExclusive"
						required
					/>
					<br />
					<label>User Id : </label> <br />
					<input
						type="number"
						onChange={(e) => {
							setUserId(e.target.value);
						}}
						placeholder="Enter UserID"
						value={userId}
						name="userId"
						required
					/>
					<br />
					<button className="button" type="submit">
            Post
					</button>
					<ToastContainer
						position="top-center"
						autoClose={2000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss={false}
						draggable
						pauseOnHover
					/>
				</div>
			</form>
		</div>
	);
}

export default Posts;

// import React from 'react';

// // minified version is also included
// // import 'react-toastify/dist/ReactToastify.min.css';

// function Posts(){
//   const notify = () => toast("Wow so easy !");

//   return (
//     <div>
//       <button onClick={notify}>Notify !</button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Posts;
