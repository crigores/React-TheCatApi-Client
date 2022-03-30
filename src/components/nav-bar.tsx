import React from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationButton } from "./buttons/authentication-button";
import { GithubOutlined } from '@ant-design/icons';


export const NavBar: React.FC = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <div className="nav-bar__brand">
          <NavLink to="/">
            <GithubOutlined
              className="nav-bar__logo"
              src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
              alt="Github logo"
              style={{fontSize: '40px'}}
            />
          </NavLink>
        </div>
        <div className="nav-bar__tabs">
          <NavLink
            to="/theCatApi"
            exact
            className="nav-bar__tab"
            activeClassName="nav-bar__tab--active"
          >
            The Cat Api
          </NavLink>
        </div>
        <div className="nav-bar__actions">
          <AuthenticationButton />
        </div>
      </nav>
    </div>
  );
};
