import React from "react";
import AllLinkButtons from "../components/AllLinkButtons.components";
import Card from "../components/Card.components";
import { siteTitle } from "../config/other.config";

const About = (props) => {
  return (
    <>
      {/* <h1>About</h1> */}
      <Card>
        <h1>About Project</h1>
        <p>
          This {siteTitle} project was a challenge to create clone of linktree
          site functionality
        </p>
      </Card>
      <Card>
        <h1>About Jagdish</h1>
        <p>
          Jagdish is Self-Taught Programmer who is mainly focused towards
          topic’s related to Cyber Security and Web Development.
        </p>
      </Card>
      <AllLinkButtons />
    </>
  );
};

export default About;
