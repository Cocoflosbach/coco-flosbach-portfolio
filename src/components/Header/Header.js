import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";

class Header extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <img
          alt=""
          crossOrigin="*"
          variant="top"
          /* src="https://i.imgur.com/ax0HWlT.jpg" */
        />
      </div>
    );
  }
}

export default Header;
