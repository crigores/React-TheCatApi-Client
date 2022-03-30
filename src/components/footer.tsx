import React from "react";
import { Auth0Resource } from "../models/auth0-resource";
import { FooterHyperlink } from "./footer-hyperlink";
import { GithubOutlined } from '@ant-design/icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-grid__info">
          <div className="footer-info__message">
            <p className="footer-message__description">
              <FooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                The Cat API has been integrated into the authentication module. 
                In addition, the initial application will be sent so that it can also be evaluated by you.
                </span>
              </FooterHyperlink>
            </p>
          </div>
        </div>
        <div className="footer-grid__brand">
          <div className="footer-brand">
            <GithubOutlined
              className="footer-brand__logo"
              src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
              alt="Auth0"
              style={{fontSize: '20px'}}
            />
            <FooterHyperlink path="https://auth0.com/">
              Rigores 2022
            </FooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
