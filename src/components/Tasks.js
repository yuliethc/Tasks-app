import Task from "./Task";

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
      
    </div>
  );
};

export default Tasks;
