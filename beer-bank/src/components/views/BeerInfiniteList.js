import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import fetchBeers from "../../actions/beers";
import Loading from "../common/Loading";

// --> action
//        --->  action
//        --- > action

function BeerInfiniteList() {
  const dispatch = useDispatch();

  const beers = useSelector((store) => store.beers);
  const isLoading = useSelector((store) => store.isLoading);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchBeers({pageNumber}));
  }, [dispatch, pageNumber]);

  return (
    <div>
      {/* <div className="header">

      <Loading />
      </div> */}
      <div className="header">
        <h3 className="header__heading">The Beer Bank</h3>
        <p className="header__description">Find Your favorite beer here</p>
        <input className="header__input" type="search" />
        <button onClick={() => setPageNumber((pageNumber) => pageNumber+1)}>Search</button>
      </div>

      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="container">
          {beers.map((beer) => (
            <div key={beer.id} className="card">
              <Link to={`/beers/${beer.id}`}>
                <h1 className="card__heading">{beer.name}</h1>
              
              <div
                className="card__img-container"
                style={{ backgroundImage: `url(${beer.image_url})` }}
              />
              <p>{beer.tagline}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BeerInfiniteList;