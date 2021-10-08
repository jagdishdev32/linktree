import { Button as BootstrapButton } from "react-bootstrap";

const Button = (props) => {
  return (
    <BootstrapButton
      varient={props.varient || ""}
      {...props.params}
      type={props.type ? props.type : "submit"}
      // Old Design
      // className={"btn btn-primary mx-2 px-4 py-2 mb-4 " + props.className}
      // className={
      //   "btn btn-primary mx-2 px-4 " + (props.className ? props.className : "")
      // }
      className={"btn btn-dark mx-2 px-4 py-2 mb-4 " + props.className}
      onClick={props.onClick}
    >
      {props.title}
    </BootstrapButton>
  );
};

export default Button;
