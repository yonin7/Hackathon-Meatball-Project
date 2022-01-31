import React from 'react';
// import { Link } from 'react-router-dom';
import './Card.css';

// export const Card = ({ image, title, id }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={title} />
//       <h2 className="card__title">{title}</h2>
//       <div className="card__shop">
//         <Link to={`/recipe/${id}`} className="card-links">
//           <button className="card__shop__action">Recipe</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

const Card = ({ data }) => {
  return (
    <div className="card container">
      <img className="card img" url={data.img} alt={data.title} />
      <div className="card text">
        <h2>{data.title}</h2>
        <h3>{data.description}</h3>
      </div>
      <div>
        <p>{data.type}</p>
        <p>{data.kitchen}</p>
      </div>
      <div>
        <h3>הוראות הכנה:</h3>
        <ol>{getInstructions}</ol>
      </div>
    </div>
  );
};

const getInstructions = (instructions) => {
  const res = instructions.split(/\d./);
  return res.map((str, index) => {
    return <li key={index}>{str}</li>;
  });
};

export default Card;
