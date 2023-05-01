import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from 'react-icons/fa';

const ChefRecipe = () => {
  const chefRecipes = useLoaderData();
  // console.log(chefRecipes)
  const {
    picture,
    nam,
    years_of_experience,
    recipe_likes,
    number_of_recipes,
    bio,
    recipes,
  } = chefRecipes;
  return (
    <div>
        {/* chef details */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            className="max-w-sm rounded-lg shadow-2xl h-96"
          />
          <div>
            <h1 className="text-5xl font-bold">{nam}</h1>
            <p className="py-6">
            {bio}
            </p>
            <div className="flex justify-between">
                <p>Number of Recipes: {number_of_recipes}</p>
                <p className="flex items-center"><FaThumbsUp className="me-1"/>{recipe_likes}</p>
                <p>Experience: {years_of_experience} years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
