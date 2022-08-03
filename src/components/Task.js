import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  return (
    <div className={`task ${props.reminder && 'reminder'}`}onDoubleClick={()=>props.onToggle(props.id)}>
      <h3>
        {props.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.id)}
        />
      </h3>
      <p>{props.day}</p>
    </div>
  );
};

export default Task;
