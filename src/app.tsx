import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "./components/footer";
import { Loader } from "./components/loader";
import { NavBar } from "./components/nav-bar";
import { ProtectedRoute } from "./components/protected-route";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import {theCatApi} from "./pages/theCatApi";
import 'antd/dist/antd.css';

export const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/theCatApi" component={theCatApi} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
};
