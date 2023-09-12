import React, { useContext } from 'react';
import { RecipeContext } from '../../Contexts/RecipeContext';
import './recipeList.scss';

export default function RecipeList(){
  const { recipeList } = useContext(RecipeContext);

  return (
    <section>
      <h2 id='recipecontexttitle'>Recipe List</h2>
      <ol>
        {recipeList.map((recipe, i) => (
          <div key={i}>
            <h2>{recipe.name}</h2>
            <p id='disc'>Description: {recipe.description}</p>
            <p id='time'>Cook Time: {recipe.cookTime}</p>
            <img src={recipe.image} alt={`recipe img ${i}`} />
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
          </div>
        ))}
      </ol>
    </section>
  );
};