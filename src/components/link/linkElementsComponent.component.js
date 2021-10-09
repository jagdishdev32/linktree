import { deleteLinkHandler } from "../../handlers/links.handlers";
import Card from "../Card.components";
import Button from "../Button.components";
import LinkForm from "./LinkForm";
import { useHistory } from "react-router-dom";

const LinkElementsComponent = ({ auth, links, setFormRender }) => {
  const history = useHistory();
  return links.map((link) => {
    const updateButtonHandler = (link) => {
      // setToggle(link.toggle);
      // Creating For Id
      let formId = "form-id-23";

      //Again Rendereing Form
      setFormRender(
        <LinkForm
          auth={auth}
          link={link}
          title={"Update Link Form"}
          id={formId}
        />
      );

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
              deleteLinkHandler(link._id, auth.usersToken, history)
            }
            type="button"
            title="Delete"
          />
        </Card>
      </div>
    );
  });
};

export default LinkElementsComponent;
