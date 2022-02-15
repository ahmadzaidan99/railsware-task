import React from "react";

const Header = (props) => {
  return (
    <div className="login-image-div">
      <img src={props.image} alt="icon" />
      <h2>{props.text}</h2>
    </div>
  );
};

export default Header;
