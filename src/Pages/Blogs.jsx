import React, { useContext, useState } from 'react';
import { useRecipeContext } from '../components/RecipieCreation/TodoProvider.jsx';
import ListTodos from '../components/Listtodos/Listtodos.jsx';
import './PageStyles/blog.scss'

const Blogs = () => {
  const { recipe, handleRecipeAdded, handleRecipeChange } = useRecipeContext();
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if any required fields are empty
    if (!recipe.name || !recipe.description || !recipe.cookTime || !recipe.image || !recipe.ingredients || !recipe.instructions) {
      setErrorMessage('Please fill in all the required fields.');
    } else {
      // Clear the error message
      setErrorMessage('');
      
      // Add the recipe to the list
      handleRecipeAdded(recipe);
      
      // Clear the input fields
      e.target.reset();
      
      // Reset the 'recipe' object
      handleRecipeChange({
        name: '',
        description: '',
        cookTime: '',
        image: '',
        ingredients: '',
        instructions: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleRecipeChange({ ...recipe, [name]: value });
  };

  return (
    <div id='Recipesubmit'>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={recipe.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Description:
          <textarea type="text" name="description" value={recipe.description} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Cook-time:
          <input type="text" name="cookTime" value={recipe.cookTime} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="image" value={recipe.image} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Ingredients:
          <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Instructions:
          <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <ListTodos />
    </div>
  );
};

export default Blogs;
