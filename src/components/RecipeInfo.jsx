import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const RecipeInfo = ({ recipe }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const notify = () => {
    toast("This recipe added to your favourite");
    setIsButtonDisabled(true)
  }

  const { name, img, cooking_method, rating, ingredients } = recipe;

  return (
    <div className="card card-compact   bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 w-full" src={img} alt="recipe" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">Cooking Methood: </span>
          {cooking_method}
        </p>
        <p>
          <span className="font-bold">Ratings: </span>
          {rating}
        </p>
        <p>
          <span className="font-bold">Ingredients: </span>
          {ingredients}
        </p>
        <div className="card-actions justify-start">
          <button
            disabled={isButtonDisabled}
            onClick={notify}
            className="text-red-500 text-3xl hover:text-red-600"
          >
            <FaHeart />
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
