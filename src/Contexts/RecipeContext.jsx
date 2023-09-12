import { useState, createContext } from 'react';

export const RecipeContext = createContext();
export const RecipeProvider = ({ children }) => {
  const [recipeList, setRecipeList] = useState([]);

  const handleRecipeAdded = (newRecipe) => {
    setRecipeList((prevValue) => [...prevValue, newRecipe]);
  };

  return (
    <RecipeContext.Provider value={{
      recipeList,
      handleRecipeAdded,
    }}>
      {children}
    </RecipeContext.Provider>
  );
};
