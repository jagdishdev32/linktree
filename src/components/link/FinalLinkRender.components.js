import { Themes } from "../../config/other.config";
import { linkClickRequestSubmit } from "../../handlers/links.handlers";
import { Button } from "react-bootstrap";

const FinalLinkRender = ({ link }) => {
  const currTheme = "danger";

  const linkClickHandler = (e) => {
    linkClickRequestSubmit(link._id);
    return console.log("Linked Clicked");
  };
  return (
    <>
      <div>
        <Button
          variant={Themes[currTheme].buttonVarient}
          href={link.url || "#"}
          target="_blank"
          onClick={linkClickHandler}
          className="my-2"
        >
          {link.title}
        </Button>
      </div>
    </>
  );
};

export default FinalLinkRender;
