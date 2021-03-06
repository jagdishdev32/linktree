import { useState, useEffect } from "react";
import MainUserCard from "../components/users/MainUserCard.component";
// import MainUserCard from "../components/MainUserCard.component";
import { siteTitle } from "../config/other.config";
import { getUserFromMyLinkTreeHandler } from "../handlers/links.handlers";

const MainCardPage = (props) => {
  const myLinkTree = props.match.params.name;
  const [user, setUser] = useState();

  useEffect(async () => {
    const userObj = await getUserFromMyLinkTreeHandler(myLinkTree);
    setUser(userObj);
  }, []);

  console.log("user", user);

  return (
    <>
      {user ? (
        <>
          {/* If User */}
          <MainUserCard user={user} theme={user.theme} />
        </>
      ) : (
        <>
          {/* If No User or LinkTree Not Valid */}
          <h1>MainCardPage</h1>
          <p>Invalid {siteTitle} Link</p>
        </>
      )}
    </>
  );
};

export default MainCardPage;
