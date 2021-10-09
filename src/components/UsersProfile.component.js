import { useState, useEffect } from "react";
import { getUser } from "../handlers/users.handler";
import Card from "./Card.components";
import LinkForm from "./LinkForm";
import Button from "./Button.components";
import {
  basename,
  defaultLinkToggle,
  hashEnabled,
  siteTitle,
} from "../config/other.config";
import { mainCardPageUrl } from "../config/frontendUrl.config";
import { deleteLinkHandler } from "../handlers/links.handlers";
import { useHistory } from "react-router";

const UsersProfile = (props) => {
  const [user, setUser] = useState({});
  const [links, setLinks] = useState([]);
  const history = useHistory();

  // Fixing Toggle Issue
  // const [toggle, setToggle] = useState(defaultLinkToggle);

  const [formRender, setFormRender] = useState(
    <LinkForm
      auth={props.auth}
      // toggle={toggle}
      // setToggle={setToggle}
    />
  );

  // alert(props);
  // console.log(props);
  console.log(links);

  useEffect(async () => {
    const data = await getUser(props.auth.usersToken);
    setUser(data.user);
    setLinks(data.user.links);
  }, []);

  const LinkElements = links.map((link) => {
    const updateButtonHandler = (link) => {
      // setToggle(link.toggle);
      // Creating For Id
      let formId = "form-id-23";
      setFormRender(
        //Again Rendereing Form
        <LinkForm
          auth={props.auth}
          link={link}
          title={"Update Link Form"}
          id={formId}
          // toggle={toggle}
          // setToggle={setToggle}
        />
      );

      // // Trying Scroll Automatic But failed
      // document.getElementById(formId)?.scrollIntoView();

      return alert("Please go to Form above All links list");
    };

    return (
      <div key={link._id}>
        <Card headKey={link._id}>
          <p>Link title: {link.title}</p>
          <p>Link Url: {link.url}</p>
          <p>Link Toggle: {link.toggle ? "On" : "Off"}</p>
          <p>Link Clicks: {link.clicks}</p>
          <Button
            onClick={() => updateButtonHandler(link)}
            type="button"
            title="Update"
          />
          <Button
            onClick={() =>
              deleteLinkHandler(link._id, props.auth.usersToken, history)
            }
            type="button"
            title="Delete"
          />
        </Card>
      </div>
    );
  });

  return (
    <>
      <Card headKey={user.key}>
        <h1>Users Profile</h1>
        <p>Username: {user.username}</p>
        <p>clicks: {user.clicks}</p>
        <p>MyLinkTree: {user.myLinkTree}</p>
        <p>Selected Theme: {user.theme}</p>
        <p>
          {siteTitle} Link:{" "}
          <a
            target="_blank"
            href={
              hashEnabled
                ? basename + "#" + mainCardPageUrl + user.myLinkTree
                : basename + mainCardPageUrl + user.myLinkTree
            }
          >
            {hashEnabled
              ? basename + "#" + mainCardPageUrl + user.myLinkTree
              : basename + mainCardPageUrl + user.myLinkTree}
          </a>
        </p>
      </Card>
      {formRender}
      {/* Links */}
      <h3>Links</h3>
      {LinkElements}
    </>
  );
};

export default UsersProfile;
