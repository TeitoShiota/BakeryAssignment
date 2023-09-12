import React, { useContext, useState } from 'react';
import { RecipeContext } from '../RecipieCreation/TodoProvider';
import './Listtodos.scss';

const ListTodos = () => {
  const { recipeItems, handleRecipeAdded, handleRecipeChange } = useContext(RecipeContext);

  const [newRecipe, setNewRecipe] = useState({
    name: '',
    description: '',
    cookTime: '',
    image: '',
    ingredients: '',
    instructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleRecipeAdded(newRecipe);

    setNewRecipe({
      name: '',
      description: '',
      cookTime: '',
      image: '',
      ingredients: '',
      instructions: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  return (
    <section>
      <h2 id='recipecontexttitle'>Recipe List</h2>
     <ol>
        {recipeItems.map((recipe, i) => (
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

export default ListTodos;
