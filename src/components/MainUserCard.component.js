import Card from "./Card.components";
import { Button } from "react-bootstrap";
import { linkClickRequestSubmit } from "../handlers/links.handlers";
import { siteTitle } from "../config/other.config";

const MainUserCard = (props) => {
  const { user } = props;
  const currTheme = "danger";

  const Themes = {
    default: {
      buttonVarient: "outline-primary",
    },
    primary: {
      buttonVarient: "outline-primary",
    },
    secondary: {
      buttonVarient: "outline-secondary",
    },
    success: {
      buttonVarient: "outline-success",
    },
    warning: {
      buttonVarient: "outline-warning",
    },
    danger: {
      buttonVarient: "outline-danger",
    },
    info: {
      buttonVarient: "outline-info",
    },
    light: {
      buttonVarient: "outline-light",
    },
    dark: {
      buttonVarient: "outline-dark",
    },
  };

  const LinkRender = ({ link }) => {
    const linkClickHandler = (e) => {
      linkClickRequestSubmit(link._id);
      return console.log("Linked Clicked");
    };
    // console.log(link);
    return (
      <>
        <div>
          <Button
            variant={Themes[currTheme].buttonVarient}
            href={link.url || "#"}
            target="_blank"
            onClick={linkClickHandler}
            // className={Themes[currTheme].buttonClassName}
            className="my-2"
          >
            {link.title}
          </Button>
        </div>
      </>
    );
  };

  return (
    <>
      <Card className="justify-content-center text-center">
        <h1>{siteTitle.toUpperCase()} CARD</h1>
        <p>Username: {user.username}</p>
        {user.links.map((link) => {
          // Filtering Links based on toggle
          if (link.toggle) {
            return <LinkRender link={link} />;
          }
        })}
      </Card>
    </>
  );
};

export default MainUserCard;
