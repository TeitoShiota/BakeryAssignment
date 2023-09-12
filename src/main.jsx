import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Contexts
import { RecipeProvider } from "./Contexts/RecipeContext.jsx";


// Base pages
import Layout from "./Pages/Layout";
import ErrorPage from "./error-page";


// Pages
import HomePage from "./Pages/HomePage.jsx";
import CreateRecipePage from "./Pages/CreateRecipePage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";



// Router
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "create-recipe", element: <CreateRecipePage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider>
      <RouterProvider router={BrowserRouter} />
    </RecipeProvider>
  </React.StrictMode>
);