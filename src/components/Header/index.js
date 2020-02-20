import React, { Component } from "react";

import "./styles.css";
import facebook from "../../assets/facebook.svg";
import profile from "../../assets/profile.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={facebook} alt="facebook logo" />
        <span className="profile">
          Meu perfil <img src={profile} alt="profile icon" />
        </span>
      </div>
    );
  }
}

export default Header;
