import { useState, createContext } from 'react';

export const RecipeContext = createContext();
export const RecipeProvider = ({ children }) => {
  const [recipeList, setRecipeList] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipeList((prev) => [...prev, newRecipe]);
  };

  return (
    <RecipeContext.Provider value={{
      recipeList,
      handleAddRecipe,
    }}>
      {children}
    </RecipeContext.Provider>
  );
};
