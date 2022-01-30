import React, { useState, useEffect } from 'react';
import { Container } from '../components/styles/Container.styled';
import myUrl from '../api/Api';
import { useReciptContext } from '../providers/recipeData';

const Recipe = () => {
  const recipeData = useReciptContext();

  return (
    <Container>
      <h2>{recipeData.name}title</h2>
      <p>{recipeData.description}description</p>
      <div>
        <img url={recipeData.image} alt={recipeData.name} />
        <h4>{recipeData.subRecipes.recipeName}recipeName</h4>
        {recipeData.subRecipes.type.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
        {recipeData.instructions.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </div>
    </Container>
  );
};

export default Recipe;
