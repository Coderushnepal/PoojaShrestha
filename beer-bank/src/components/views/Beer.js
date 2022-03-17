import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as beerService from '../../services/beer';

function Beer(props) {
  const {params} = props.match;

    const[beer, setBeer] = useState({});

    const {id} = props.match.params;

    useEffect(() => {
      const fetchBeers = async() => {
        const beer = await beerService.fetchBeersById(id);

        setBeer(beer);
      };
      fetchBeers();
    }, []);

  return (
    <div>
      <img src={beer.image_url} />
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
      <div>
        <b>IBU</b> : {beer.ibu}
        <b>ABV</b> : {beer.abv}
        <b>EBC</b> : {beer.ebc}
      </div>
    </div>
  );
}


export default Beer;