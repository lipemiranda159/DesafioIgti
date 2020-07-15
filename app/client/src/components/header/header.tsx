import React from "react";
import Logo from "./logo";
import Avatar from "./avatar";
import TabsPanel from "./tabs";
import "./header.css";

export default function Header() {
  return (
    <header id="header" className="page-topbar nav-extended">
      <div className="navbar-fixed">
        <nav className="navbar-color gradient-45deg-light-blue-cyan">
          <div className="nav-wrapper">
            <ul className="left">
              <li>
                <Logo />
              </li>
            </ul>
            <Avatar />
            <TabsPanel />
          </div>
        </nav>
      </div>
    </header>
  );
}
