import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"

export const Card = ({ image, title, id }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
      <div className="card__shop">
        <Link to={`/recipe/${id}`} className="card-links"><button className="card__shop__action">Recipe</button></Link>
      </div>
    </div>
  );
};
