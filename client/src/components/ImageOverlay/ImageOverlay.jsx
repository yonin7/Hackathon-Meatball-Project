import React from 'react';
import './style.css';
import img from "../../images/the-fry-family-food-co-bSt5aUKiiL4-unsplash.jpg";

export default function ImageOverlay() {

  return (
    <div className="image-overlay">
      <img className="backward-image" src={img} alt="meatball" />
      <div className="text-on-img">
        <h1>home page</h1>
        <div class="srch_wrpr">
          <input type="checkbox" name="" class="checkbox" />
          <div class="srch_sb_cnt">
            <input type="text" name="text_bar" id="" class="sech_txt_inpt" placeholder="Type to search..." />
            <button class="srch_btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}