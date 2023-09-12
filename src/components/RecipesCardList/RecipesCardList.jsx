import { useContext } from 'react';


import { RecipeContext } from '../../Contexts/RecipeContext'

import Cake from '../../assets/chocolate-cake.jpg'
export default function RecipesCardList(){
  const { recipeList } = useContext(RecipeContext);

  return (
    <>
      <section id='recipelists'>
        <ul> 
          {recipeList.map((recipe, i) => (
            <li key={i}>
              <h2>{recipe.name}</h2>
              <p id='disc'>Description: {recipe.description}</p>
              <p id='time'>Cook Time: {recipe.cookTime}</p>
              <img className='cardsimgs' src={recipe.image? recipe.image : Cake} alt={`recipe img ${i}`} />
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
            </li>
          ))}
        </ul>
      </section>  
    </>
  )
}