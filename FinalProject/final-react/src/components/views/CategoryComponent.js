import NewsComponent from './newsComponent';
import React, { useEffect, useState } from 'react';
import * as categoryService from '../../services/category';

function CategoryListing(props) {
  const id = props.match.params.id;
  const [eachCategoryHere, setEachCategoryHere] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const eachCategoryHere = await categoryService.fetchCategoryById(id);
      console.log('each category data:', eachCategoryHere.data);
      setEachCategoryHere(eachCategoryHere.data);
    };
    fetchCategory();
  }, []);

  return (
    <div className="newsSection">
      <h1></h1>

      {eachCategoryHere.map((eachNews, index) => {
        return (
          <div key={eachNews.id} className="eachNews">
            {console.log('eache', eachNews)}
            <NewsComponent eachNews={eachNews} />
          </div>
        );
      })}
    </div>
  );
}

export default CategoryListing;
