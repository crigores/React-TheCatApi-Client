import React from "react";
import { GithubOutlined } from '@ant-design/icons';

export const HeroBanner: React.FC = () => {
  const logo = "https://cdn.auth0.com/blog/hello-auth0/react-logo.svg";

  const openCodeSample = () => {
    window.open(
      "https://auth0.com/developers/hub/code-samples/spa/react-typescript/",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div className="hero-banner">
      <GithubOutlined className="hero-banner__logo" style={{fontSize: '150px'}}/>
      <h1 className="hero-banner__headline">The Cat Api!</h1>
      <p className="hero-banner__description">
      This is a simple application where cats are listed. You can list them by breed or category. 
      <strong>Auth0</strong> is integrated in this application to make your login easier. 
      </p>
    </div>
  );
};
