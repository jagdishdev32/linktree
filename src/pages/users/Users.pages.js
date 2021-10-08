import { Switch, Route } from "react-router-dom";
import AllLinkButtons from "../../components/AllLinkButtons.components";
import LinkButton from "../../components/LinkButton.components";
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
      <h1>Users Page</h1>
      <Switch>
        <Route path={`${usersUrl + usersLoginUrl}`}>
          <UsersLogin auth={props.auth} setAuth={props.setAuth} />
        </Route>
        <Route
          path={`${usersUrl + usersRegisterUrl}`}
          component={UsersRegister}
        >
          <UsersRegister auth={props.auth} setAuth={props.setAuth} />
        </Route>
      </Switch>
      <br />

      {props.auth.usersLogin ? (
        <>
          {/* Users Logged In */}
          <h1>User Logged In</h1>
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
