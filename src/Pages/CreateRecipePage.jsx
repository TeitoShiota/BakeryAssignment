import RecipeList from '../components/RecipeList/RecipeList.jsx';
import CreateRecipeForm from '../components/CreateRecipeForm/CreateRecipeForm.jsx';
import './PageStyles//CreateRecipePage.scss'

export default function CreateRecipePage() {

  return (
    <>
      <CreateRecipeForm />
      <RecipeList />
    </>
  );
};