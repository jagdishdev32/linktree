import { useState, useEffect } from "react";
import {
  getUser,
  themeChangeRequestSubmit,
} from "../../handlers/users.handler";
import Card from "../Card.components";
import LinkForm from "../link/LinkForm";
import { basename, hashEnabled, siteTitle } from "../../config/other.config";
import {
  frontendBaseUrl,
  mainCardPageUrl,
} from "../../config/frontendUrl.config";
import LinkElementsComponent from "../link/linkElementsComponent.component";
import Loading from "../Loading.components";
import ThemeOptions from "../ThemesOptions.component";
import MainUserCard from "./MainUserCard.component";
import { useHistory } from "react-router";

const UsersProfile = ({ auth }) => {
  const [user, setUser] = useState({});
  const [links, setLinks] = useState([]);
  const [myLinkTreeLink, setMyLinkTreeLink] = useState();

  const history = useHistory();

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

  const ThemeHandler = (e) => {
    let theme = e.target.value;
    // e.preventDefault()
    return themeChangeRequestSubmit(theme, auth.usersToken, history);
  };

  return (
    <>
      {user.username ? (
        <>
          {/* If User data fetched */}
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
            <ThemeOptions user={user} onChange={ThemeHandler} />
          </Card>

          {/* Preview Card */}
          <h2>Preview Card</h2>
          <MainUserCard user={user} />

          {/* Dynyically Rendering Form */}
          {formRender}

          {/* Links */}
          <h3>Your Links</h3>
          <LinkElementsComponent
            links={links}
            auth={auth}
            setFormRender={setFormRender}
          />
        </>
      ) : (
        <>
          {/* If User data not yet fetched */}
          <Loading />
        </>
      )}
    </>
  );
};

export default UsersProfile;
