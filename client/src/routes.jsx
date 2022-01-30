import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import { RecipeProvider } from './providers/recipeData';

function AppRoutes() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipe" element={<Recipe />} />
      </Routes>
    </RecipeProvider>
  );
}

export default AppRoutes;
