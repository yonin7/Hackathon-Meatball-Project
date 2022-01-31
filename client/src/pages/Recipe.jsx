import React, { useState, useEffect } from 'react';
import { Container } from "../components/styles/Container.styled"
import myUrl from '../api/Api';
import "./styles/Recipe.scss";
import img from "../images/the-fry-family-food-co-bSt5aUKiiL4-unsplash.jpg";

const Recipe = () => {
  // const [recipeData, setRecipeData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await myUrl.get('/recipes');
  //       setRecipeData(data);
  //     } catch (e) {
  //       setRecipeData([]);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <Container>
      <div className="recipe-wrapper">
        <div className="recipe-heading">
          <h2>title</h2>
          <p>description</p>
        </div>
        <img url={img} alt="a" />
        <h4>recipeName</h4>
        <div className="recipe-description">
          <ul>
            <li>gfh</li>
            <li>fdggsrghfdh trh rhst r</li>
            <li>drfgs rgs rg</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Recipe;
