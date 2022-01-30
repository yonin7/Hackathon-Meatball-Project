import React from 'react';

export const Card = () => {
  return (
    <div className="card container">
      <img className="card img" url="http://placehold.it/" alt="meatball" />
      <div className="card text">
        <h3>title</h3>
        <p>description</p>
      </div>
    </div>
  );
};
