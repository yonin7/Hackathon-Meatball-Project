import React, { useState, useEffect } from 'react';
import Container from "../components/styles/Container.styled"
import myUrl from '../../api/Api';

const Recipe = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await myUrl.get('/recipes');
        setRecipeData(data);
      } catch (e) {
        setRecipeData([]);
      }
    }
    getData();
  }, []);

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
