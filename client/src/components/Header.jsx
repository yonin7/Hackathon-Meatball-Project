
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "./styles/Header.scss";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const hamburgerToggle = () => {
    setIsVisible(!isVisible);
  }

  return (
    // <nav classNameName="topnav">
    //   <div classNameName="left-nav-item">
    //     <span onClick={hamburgerToggle} id="hamburger-nav-item"><i className="fas fa-bars"></i></span>
    //     <Link to="/" classNameName={isVisible ? `display-none` : ``}><span>Home</span></Link>
    //     <Link to="/" classNameName={isVisible ? `display-none` : ``}><span>About</span></Link>
    //   </div>
    //   <div classNameName={`search-container ${isVisible ? `display-none` : ``}`}>
    //     <form>
    //       <input type="text" placeholder="Search.." name="search" />
    //       <button type="submit"><i className="fa fa-search"></i></button>
    //     </form>
    //   </div>
    // </nav>
    <header id="nav-wrapper">
      <nav id="nav">
        <div className="nav left">
          <span className="gradient skew"><h1 className="logo un-skew"><Link to="/">Logo Here</Link></h1></span>
          <button onClick={hamburgerToggle} id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
        </div>
        <div className={`nav right ${isVisible ? "display-none" : ""}`}>
          <Link to="/" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></Link>
          <Link to="/" className="nav-link"><span className="nav-link-span"><span className="u-nav">About</span></span></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
