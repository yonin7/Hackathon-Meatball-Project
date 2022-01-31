import React, { useState } from 'react';
import './style.css';
import img from '../../images/the-fry-family-food-co-bSt5aUKiiL4-unsplash.jpg';
import baseURL from '../../api/Api';
import { useSetRecipeContext } from '../../providers/recipeData';

export default function ImageOverlay() {
  const [inputVal, setInputVal] = useState('');
  const setRecipeData = useSetRecipeContext();

  const handleInput = ({ target: { value } }) => {
    console.log(value);
    setInputVal(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const newInputVal = inputVal.split(' ').join('%20');
    console.log(newInputVal);
    const { data: recepies } = await baseURL.get(`/${newInputVal}`);
    console.log(recepies);
    // if (!recepies.length) return;
    // setRecipeData(recepies);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="image-overlay">
        <img className="backward-image" src={img} alt="meatball" />
        <div className="text-on-img">
          <h1>home page</h1>
          <div className="srch_wrpr">
            <input type="checkbox" name="" className="checkbox" />
            <div className="srch_sb_cnt">
              <input
                onChange={handleInput}
                value={inputVal}
                type="text"
                name="text_bar"
                id=""
                className="sech_txt_inpt"
                placeholder="Type to search..."
              />
              <button type={'submit'} className="srch_btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
