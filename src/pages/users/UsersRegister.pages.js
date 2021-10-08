import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button.components";
import { siteTitle } from "../../config/other.config";
import { usersHandleRegisterSubmit } from "../../handlers/users.handler";

const UsersRegister = (props) => {
  // const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [myLinkTree, setMyLinkTree] = useState(undefined);
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  // const nameChangeHandle = (e) => {
  //   setName(e.target.value);
  // };

  const usernameChangeHandle = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandle = (e) => {
    setPassword(e.target.value);
  };

  const myLinkTreeChangeHandle = (e) => {
    setMyLinkTree(e.target.value);
  };

  const checkChangeHandle = (e) => {
    if (username !== "" && password !== "") {
      // alert("filled");
      setChecked(true);
    } else {
      alert("Username & Password is required.");
      e.target.checked = false;
      setChecked(false);
    }
  };

  const submitButtonHandle = (e) => {
    e.preventDefault();
    if (checked) {
      usersHandleRegisterSubmit(
        e,
        username,
        password,
        myLinkTree,
        history,
        props.setAuth
      );
    } else {
      alert("Please Click on Check button");
    }
  };

  return (
    <>
      {/* -- name, username, password, age, address, phone+no */}
      <h1>Users Register Page</h1>
      <p className="text-muted">
        <span className="text-danger">*</span> Marked Are Required.
      </p>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">
            Username/Email
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={usernameChangeHandle}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Password
            <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            className="form-control"
            onChange={passwordChangeHandle}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Your {siteTitle} Link Title</label>
          <input
            type="text"
            className="form-control"
            onChange={myLinkTreeChangeHandle}
            defaultValue={username}
            placeholder={username}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onSelect={() => setChecked(true)}
              onChange={checkChangeHandle}
            />
            <label className="form-check-label">Check me out</label>
          </div>
        </div>
        <div className="col-12">
          <Button onClick={submitButtonHandle} title="Submit" />
        </div>
      </form>
    </>
  );
};

export default UsersRegister;
