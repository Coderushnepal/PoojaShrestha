import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

const NewsComponent = (props) => {
  console.log(props);

  const eachNews = props.eachNews;
  const index = props.index;
  const dispatch = useDispatch();

  const [admin, setAdmin] = useState({});

  useEffect(() => {
    setInterval(() => {
      const existingUser = localStorage.getItem('Admin');
      const admin = existingUser;
      setAdmin(admin);
    }, 100);
  }, []);

  const path = eachNews.id;

  return (
    <>
      <Link to={`/category/${eachNews.categoryId}`} className="eachNews__category eachNews--common">
        {eachNews.category}
      </Link>

      <h1 className="eachNews__title">{eachNews.title}</h1>
      {console.log(eachNews.title)}
      <p className="eachNews__info eachNews--common">
        <span>{eachNews.publishedDate?.slice(0, 10)}</span>
        <br />
        <span>Author: {eachNews.user}</span>
        <br />
        {eachNews.isExclusive ? <span>Exclusive</span> : <span>Not Exclusive</span>}
      </p>
      <p className="eachNews__description">
        {eachNews.description?.slice(0, 100)}
        <Link to={`/news/${eachNews.id}`}> ...See more</Link>
      </p>

      {admin === 'true' ? (
        <span className="updateDelete">
          <Link to={`/edit/${eachNews.id}`}>
            <i className="fa fa-pencil edit"></i>
          </Link>
          <Link to={`delete/${eachNews.id}`}>
            <i className="fa fa-trash delete"></i>
          </Link>
        </span>
      ) : (
        ''
      )}
    </>
  );
};

export default NewsComponent;
