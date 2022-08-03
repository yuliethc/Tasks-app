import Task from "./Task";
import Button from "./Button";

const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            day={task.day}
            reminder={task.reminder}
            onDelete={props.onDelete}
            onToggle={props.onToggle}
          />
        );
      })}
      <Button
        color={props.showAddTask ? "red" : "green"}
        text={props.showAddTask ? "Close" : "Add"}
        onClick={props.onAdd}
      />
    </div>
  );
};

export default Tasks;
