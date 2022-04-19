import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import * as newsService from '../../services/news';

function Posts(props) {
  const history = useHistory();

  const [eachNews, setEachNews] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    const fetchNews = async () => {
      const eachNews = await newsService.fetchNewsById(id);
      setEachNews(eachNews.data);
      setTitle(eachNews.data.title);
      setDescription(eachNews.data.description);
      setIsExclusive(eachNews.data.isExclusive);
      setCategory(eachNews.data.category);
      console.log('fetched', eachNews);
    };

    fetchNews();
  }, []);

  const newtitle = eachNews.title;

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isExclusive, setIsExclusive] = useState();

  async function onEdit(e) {
    e.preventDefault();
    const postData = {
      title: title,
      description: description,
      isExclusive: isExclusive,
    };

    const data = await newsService.editNews(postData, id);

    if (data.message === 'Record updated successfully') {
      toast.success('Edited!');
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } else {
      console.log(data);
      toast.error(data);
    }
  }

  return (
    <div className="editing">
      <form className="edit-post-form" onSubmit={onEdit}>
        <div className="formElements">
          <h2>Post to Exclusive Khabar!</h2>
          <label>Category: {category}</label> <br />
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
          <input
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Enter Description"
            value={description}
            name="description"
            required
          />
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
          <button className="button" type="submit">
            Update
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
