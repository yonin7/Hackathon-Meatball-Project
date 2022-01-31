import React, { useState, useEffect } from 'react';
import { Container } from '../components/styles/Container.styled';
import "./styles/Recipe.scss";
import img from "../images/the-fry-family-food-co-bSt5aUKiiL4-unsplash.jpg";
import { useReciptContext } from '../providers/recipeData';

const Recipe = () => {
  const recipeData = useReciptContext();

  return (
    <Container>
      <div className="recipe-wrapper">
        <div className="recipe-heading">
          <h2>{recipeData.name}title</h2>
          <p>{recipeData.description}description</p>
        </div>
        <img url={recipeData.image} alt={recipeData.name} />
        <h4>{recipeData.subRecipes.recipeName}recipeName</h4>
        <div className="recipe-description">
          {recipeData.subRecipes.type.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
          {recipeData.instructions.map((instruction) => (
            <li>{instruction}</li>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Recipe;
