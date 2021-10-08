import { Switch, Route, Redirect } from "react-router-dom";
import AllLinkButtons from "../../components/AllLinkButtons.components";
import LinkButton from "../../components/LinkButton.components";
import UsersProfile from "../../components/UsersProfile.component";
import {
  usersLoginUrl,
  usersRegisterUrl,
  usersUrl,
} from "../../config/frontendUrl.config";
import UsersLogin from "./UsersLogin.pages";
import UsersRegister from "./UsersRegister.pages";

const Users = (props) => {
  return (
    <>
      {/* <h1>Users Page</h1> */}
      {props.auth.usersLogin ? null : <p>Please Login or Register</p>}

      <Switch>
        <Route path={`${usersUrl + usersLoginUrl}`}>
          {props.auth.usersLogin ? (
            // If LoggedIN redirect to Users Page
            <Redirect to={usersUrl} />
          ) : (
            <UsersLogin auth={props.auth} setAuth={props.setAuth} />
          )}
        </Route>
        <Route
          path={`${usersUrl + usersRegisterUrl}`}
          component={UsersRegister}
        >
          {props.auth.usersLogin ? (
            // If LoggedIN redirect to Users Page
            <Redirect to={usersUrl} />
          ) : (
            <UsersRegister auth={props.auth} setAuth={props.setAuth} />
          )}
        </Route>
      </Switch>
      <br />

      {props.auth.usersLogin ? (
        <>
          {/* Users Logged In */}
          {/* <h1>User Logged In</h1> */}
          <UsersProfile />
          <AllLinkButtons />
        </>
      ) : (
        <>
          {/* Users Not Logged In */}
          <LinkButton title="Login" to={`${usersUrl + usersLoginUrl}`} />
          <LinkButton title="Register" to={`${usersUrl + usersRegisterUrl}`} />
        </>
      )}
    </>
  );
};

export default Users;
