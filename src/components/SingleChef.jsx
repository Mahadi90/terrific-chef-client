import React from 'react';
import { Link } from 'react-router-dom';

const SingleChef = ({singleChef}) => {

   const {picture, nam, years_of_experience, recipe_likes, number_of_recipes} = singleChef;

    return (
        <div className="card w-[100%] h-64 bg-base-100 shadow-xl image-full">
        <figure><img src={picture} alt="chef" /></figure>
        <div className="card-body">
          <h2 className="card-title text-green-500">{nam}</h2>
          <p>Experience: {years_of_experience} Years</p>
          <p>Number of recipes: {number_of_recipes} Items</p>
          <p>Recipes Liked: {recipe_likes}</p>
          <Link className='w-full bg-red-500 p-2 rounded-md text-center'>View Recipes</Link>
        </div>
      </div>
    );
};

export default SingleChef;