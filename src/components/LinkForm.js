import { useState } from "react";
import Card from "./Card.components";
import Button from "./Button.components";
import { useHistory } from "react-router";
import {
  createLinkHandler,
  updateLinkHandler,
} from "../handlers/links.handlers";
import { useEffect } from "react";
import { defaultLinkToggle } from "../config/other.config";

const LinkForm = (props) => {
  // Setting Default Values if Form is being used for update
  const titleDefault = "";
  const urlDefault = undefined;
  const toggleDefault = props.toggle === true ? true : defaultLinkToggle;
  const idDefault = props.link?._id ? props.link._id : undefined;

  const [title, setTitle] = useState(titleDefault);
  const [url, setUrl] = useState(urlDefault);
  const [toggle, setToggle] = useState(toggleDefault);
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setTitle(props.link?.title ? props.link.title : "");
    setUrl(props.link?.url ? props.link.url : undefined);
  }, [props]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const urlChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const toggleChangeHandler = (e) => {
    setToggle(e.target.checked);
    // props.setToggle(e.target.checked);
  };

  const checkChangeHandler = (e) => {
    if (title !== "") {
      // alert("filled");
      setChecked(true);
    } else {
      console.log(title);
      alert("Title Required");
      e.target.checked = false;
      setChecked(false);
    }
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    if (checked) {
      // alert(title + url + (props.toggle ? "true" : "false"));
      // alert(title + url + (toggle ? "true" : "false"));
      // Checking if value to update
      if (idDefault) {
        // alert(title+ url+ props.toggle)
        updateLinkHandler(
          props.link._id,
          title,
          url,
          toggle,
          props.auth.usersToken,
          history
        );
        return null;
        // return alert("Updated Link");
      } else {
        createLinkHandler(title, url, toggle, props.auth.usersToken, history)
          .then(() => {
            return null;
          })
          .catch((error) => alert(error.message));
      }

      //   alert("checked");
    } else {
      alert("Please Click on Check button");
    }
  };

  return (
    <>
      <Card id={props.id || "form-id"}>
        <h3>{props.title || "Create Link"}</h3>
        <p className="text-muted"></p>
        <form className="row g-3">
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              onChange={titleChangeHandler}
              required
              placeholder="title*"
              // defaultValue={titleDefault}
              value={title}
            />
          </div>
          <div className="col-7">
            <input
              type="text"
              className="form-control"
              onChange={urlChangeHandler}
              placeholder="url"
              // defaultValue={urlDefault}
              value={url}
            />
          </div>
          <div className="col-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onSelect={() => setToggle(true)}
                onChange={toggleChangeHandler}
              />
              <label className="form-check-label">Enable Link</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onSelect={() => setChecked(true)}
                onChange={checkChangeHandler}
              />
              <label className="form-check-label">Filled Required Items</label>
            </div>
          </div>
          <div className="col-12">
            <Button
              onClick={submitButtonHandler}
              title="Submit"
              type="button"
            />
          </div>
        </form>
      </Card>
    </>
  );
};

export default LinkForm;
