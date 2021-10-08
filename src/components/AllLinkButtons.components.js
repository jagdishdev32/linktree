import LinkButton from "./LinkButton.components";

import {
  aboutUrl,
  homeUrl,
  usersUrl,
  usersLoginUrl,
  usersRegisterUrl,
} from "../config/frontendUrl.config";
import Card from "./Card.components";

const AllLinkButtons = () => {
  return (
    <>
      <Card className="text-center">
        <p className="text-dark">All Other Page Links</p>
        <LinkButton to={homeUrl} title="Home Page" />
        <LinkButton to={aboutUrl} title="About Page" />
        <LinkButton to={usersUrl} title="Users Page" />
        <LinkButton to={usersUrl + usersLoginUrl} title="Users Login Page" />
        <LinkButton
          to={usersUrl + usersRegisterUrl}
          title="Users Register Page"
        />
        <LinkButton to={"alsdfjasdfasdf"} title="404 Page Not Found" />
      </Card>
    </>
  );
};

export default AllLinkButtons;
