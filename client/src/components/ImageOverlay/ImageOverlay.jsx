import React from 'react';
import './style.css';
import img from "../../images/the-fry-family-food-co-bSt5aUKiiL4-unsplash.jpg";

export default function ImageOverlay() {

  return (
    <div className="image-overlay">
      <img className="backward-image" src={img} alt="meatball" />
      <div className="text-on-img">
        <h2>Search Your Favorite Meatball</h2>
        <div className="srch_wrpr">
          <input type="checkbox" name="" class="checkbox" />
          <div className="srch_sb_cnt">
            <input type="text" name="text_bar" id="" className="sech_txt_inpt" placeholder="Type to search..." />
            <button className="srch_btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}