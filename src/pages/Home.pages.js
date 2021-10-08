import React from "react";
import AllLinkButtons from "../components/AllLinkButtons.components";
import Card from "../components/Card.components";
import LinkButton from "../components/LinkButton.components";

import {
  //   booksUrl,
  //   employesLoginUrl,
  //   employesRegisterUrl,
  //   employesUrl,
  usersLoginUrl,
  usersRegisterUrl,
  usersUrl,
} from "../config/frontendUrl.config";
import { siteTitle } from "../config/other.config";

const Home = (props) => {
  return (
    <>
      {/* <h1>Home Page</h1>
      <AllLinkButtons /> */}
      <div className="home-header text-center">
        <h1 className="text-dark">Welcome to {siteTitle}</h1>
        <p className="text-muted">by Jagdish</p>
      </div>

      <div className="home-body text-center">
        <div className="home-body books ">
          <Card
            // header="Get Books"
            headKey="home-body-books"
            className="text-center"
          >
            {props.auth.usersLogin ? (
              <>
                {/* If User LoggedIn */}
                {/* <LinkButton to={booksUrl} title="Books" /> */}
                <p>User Logged In</p>
                <LinkButton to={usersUrl} title="Profile" />
              </>
            ) : (
              <>
                {/* If Noone LoggedIn */}
                <p className="text-secondary">New To Our App</p>
                <LinkButton to={usersUrl + usersLoginUrl} title="Login" />
                <LinkButton
                  to={usersUrl + usersRegisterUrl}
                  title="Registraion"
                />
              </>
            )}
          </Card>
        </div>
      </div>

      <AllLinkButtons />
    </>
  );
};

export default Home;
