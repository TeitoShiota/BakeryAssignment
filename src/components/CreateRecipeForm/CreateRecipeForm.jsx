import { useContext, useState } from 'react';
import { RecipeContext } from '../../Contexts/RecipeContext';

export default function CreateRecipeForm() {
    const { handleRecipeAdded } = useContext(RecipeContext);
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        cookTime: '',
        image: '',
        ingredients: '',
        instructions: ''
    });


    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // alerts the user that the recipe was submitted
        alert('Recipe submitted!')
        
        // Add the recipe to the list
        handleRecipeAdded(recipe);
        
        // Clear the input fields
        e.target.reset();
        
        // Reset the 'recipe' object
        setRecipe({
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
        setRecipe({ ...recipe, [name]: value });

    };

  return (
    <>
        <section id='Recipesubmit'>
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
        </section>
    </>
  );
};