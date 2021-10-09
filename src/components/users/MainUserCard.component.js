import Card from "../Card.components";
import { siteTitle } from "../../config/other.config";
import FinalLinkRender from "../link/FinalLinkRender.components";

const MainUserCard = ({ user }) => {
  return (
    <>
      <Card className="justify-content-center text-center">
        <h1>{siteTitle.toUpperCase()} CARD</h1>
        <p>Username: {user.username}</p>
        {user.links.map((link) => {
          // Filtering Links based on toggle
          if (link.toggle) {
            return <FinalLinkRender link={link} />;
          }
        })}
      </Card>
    </>
  );
};

export default MainUserCard;
