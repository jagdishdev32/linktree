import { useState } from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

import Header from "./components/Header.components";

import Home from "./pages/Home.pages";
import About from "./pages/About.pages";
import NotFound from "./pages/NotFound.pages";
import Users from "./pages/users/Users.pages";

import { homeUrl, aboutUrl, usersUrl } from "./config/frontendUrl.config";

import loginData from "./data/loginData.data";
import { basename, hashEnabled } from "./config/other.config";

function App() {
  const [auth, setAuth] = useState(loginData);

  const Router = (props) => {
    if (hashEnabled) {
      return (
        <HashRouter basename={props.basename || ""}>
          {props.children}
        </HashRouter>
      );
    } else {
      return (
        <BrowserRouter basename={props.basename || ""}>
          {props.children}
        </BrowserRouter>
      );
    }
  };

  return (
    <>
      <Router basename={basename}>
        <Header auth={auth} setAuth={setAuth} />
        <div className="container">
          <Switch>
            <Route path={homeUrl} exact>
              <Home auth={auth} />
            </Route>
            <Route path={aboutUrl}>
              <About auth={auth} setAuth={setAuth} />
            </Route>
            <Route path={usersUrl}>
              <Users auth={auth} setAuth={setAuth} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
