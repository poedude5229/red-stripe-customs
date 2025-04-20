import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import favicon from "../../favicon.png";
import "./Navigation.css"
export default function Navigation() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <div>
        <ul id="topNavbar">
          <li id="home-navlink">
            <NavLink id="homenavlinkchild" to="/">
              <img src={favicon} alt="Home" />
            </NavLink>
          </li>
        </ul>
      </div>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
      <p>asdjlkfjlksdaf</p>
    </div>
  );
}
