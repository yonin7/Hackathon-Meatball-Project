import React from 'react';

export const Card = () => {
  return (
    <div className="card container">
      <img className="card img" url="http://placehold.it/" />
      <div className="card text">
        <h3>title</h3>
        <p>descrition</p>
        <div className="timeArating">
          <span className="time">40 min</span>
          <span className="rating">4.5</span>
        </div>
      </div>
    </div>
  );
};
