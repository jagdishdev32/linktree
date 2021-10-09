import { useState, useEffect } from "react";
import { getUser } from "../../handlers/users.handler";
import Card from "../Card.components";
import LinkForm from "../link/LinkForm";
import { basename, hashEnabled, siteTitle } from "../../config/other.config";
import {
  frontendBaseUrl,
  mainCardPageUrl,
} from "../../config/frontendUrl.config";
import LinkElementsComponent from "../link/linkElementsComponent.component";

const UsersProfile = ({ auth }) => {
  const [user, setUser] = useState({});
  const [links, setLinks] = useState([]);
  const [myLinkTreeLink, setMyLinkTreeLink] = useState();

  const [formRender, setFormRender] = useState(<LinkForm auth={auth} />);

  // console.log(links);

  useEffect(async () => {
    const data = await getUser(auth.usersToken);
    setUser(data.user);
    setLinks(data.user.links);

    // Setting my linktreelink
    setMyLinkTreeLink(
      hashEnabled
        ? basename + "#" + mainCardPageUrl + data.user.myLinkTree
        : basename + mainCardPageUrl + data.user.myLinkTree
    );
  }, []);

  return (
    <>
      {/*  */}
      <Card headKey={user._id}>
        <h1>Users Profile</h1>
        <p>Username: {user.username}</p>
        <p>clicks: {user.clicks}</p>
        <p>MyLinkTree: {user.myLinkTree}</p>
        <p>Selected Theme: {user.theme}</p>
        <p>
          {siteTitle} Link:{" "}
          <a target="_blank" href={myLinkTreeLink} rel="noreferrer">
            {frontendBaseUrl + myLinkTreeLink}
          </a>
        </p>
      </Card>
      {/* Dynyically Rendering Form */}
      {formRender}
      {/* Links */}
      <h3>Links</h3>
      <LinkElementsComponent
        links={links}
        auth={auth}
        setFormRender={setFormRender}
      />
      {/* TODO add preview user theme */}
    </>
  );
};

export default UsersProfile;
