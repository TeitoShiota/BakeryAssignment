import React, { useState, createContext, useContext } from 'react';

export const RecipeContext = createContext();

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export const RecipeProvider = ({ children }) => {
  const [recipeItems, setRecipeItems] = useState([]);
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    cookTime: '',
    image: '',
    ingredients: '',
    instructions: ''
  });

  const handleRecipeAdded = (newRecipe) => {
    setRecipeItems((prevValue) => [...prevValue, newRecipe]);
  };

  const handleRecipeChange = (newRecipe) => {
    setRecipe(newRecipe);
  };

  const value = { recipeItems, handleRecipeAdded, recipe, handleRecipeChange };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};
