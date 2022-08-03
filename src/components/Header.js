import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = (props) => {
    let location = useLocation()
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname ==="/" && <Button
        color={props.showAddTask ? "red" : "green"}
        text={props.showAddTask ? "Close" : "Add"}
        onClick={props.onAdd}
      />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
