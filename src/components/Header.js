import Button from "./Button";
const Header = (props) => {
   
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button 
            color={props.showAddTask ? "red" : "green"}
            text={props.showAddTask ? "Close" : "Add"}
            onClick={props.onAdd}
            />
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;