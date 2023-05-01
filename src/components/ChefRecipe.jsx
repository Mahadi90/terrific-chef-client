import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from 'react-icons/fa';
import RecipeInfo from "./RecipeInfo";

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

//   console.log(recipes)
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
            <div className="lg:flex justify-between">
                <p><span className="font-bold">Number of Recipes:</span> {number_of_recipes}</p>
                <p className="flex items-center"><FaThumbsUp className="me-1"/>{recipe_likes}</p>
                <p><span className="font-bold">Experinece:</span> {years_of_experience} years</p>
            </div>
          </div>
        </div>
      </div>

      {/* recipes info */}
      <h2 className="text-red-500 text-3xl font-bold text-center mt-14">{nam}'s Recipes</h2>
      <div className="mx-2 lg:mx-12 my-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {
            recipes.map(recipe => <RecipeInfo
            key={recipe.id}
            recipe={recipe}
            ></RecipeInfo>)
        }
      </div>
    </div>
  );
};

export default ChefRecipe;
