import Button from "./Button";
const Header = (props) => {
   
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button 
            color={props.showAddTask ? "green" : "black"}
            text={props.showAddTask ? "Add" : "Close"}
            onClick={props.onAdd}
            />
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;