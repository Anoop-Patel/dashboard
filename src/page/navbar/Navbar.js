import React from "react";
import homeicon from"../../asset/image/instalogo.jpg";
import dummyicon from"../../asset/image/javascript.png";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div class="search-bar">
        <i class="icon fa fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-item">

      {[...Array(3)].map(() => {
        return (
    <div className="item"> 
      <img src={dummyicon} alt="" /> 
    </div>
  );
})}
        <img src={homeicon}alt="" className="logo"/> 
     </div>
    </div>
  );
};

export default Navbar;
