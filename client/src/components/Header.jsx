
import { Link } from 'react-router-dom';
import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <nav class="topnav">
      <span><i class="fas fa-bars"></i></span>
      <Link to="/"><span class="active">Home</span></Link>
      <Link to="/"><span>About</span></Link>
      <div class="search-container">
        <form>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
