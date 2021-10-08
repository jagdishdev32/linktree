import { useState } from "react";
import { useHistory } from "react-router-dom";
import { usersUrl } from "../../config/frontendUrl.config";
import { usersHandleLoggedInSubmit } from "../../handlers/users.handler";
import Button from "../../components/Button.components";

const UsersLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <>
      <h1>Login Page</h1>

      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your data with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          onClick={(e) =>
            usersHandleLoggedInSubmit(
              e,
              username,
              password,
              history,
              props.setAuth
            )
          }
          title="Submit"
        />
      </form>
    </>
  );
};

export default UsersLogin;
