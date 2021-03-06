import React, {useState, useEffect} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {ReactComponent as UpArrow} from "../Assets/up-arrow-circle.svg";
import { openMenu, closeMenu  } from "../Animations/menuAnimations";

import gsap from "gsap";

let tl = gsap.timeline();

const Header = ({history, dimensions}) => {

  const[menuState, setMenuState] = useState ({menuOpened: false});

  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">Form & Function</a>
          </div>
          <div className="nav-toggle">
            <div onClick={() => setMenuState({menuOpened: true}) } className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div onClick={() => setMenuState({menuOpened: false}) } className="hamburger-menu-close">
              <UpArrow/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header);
