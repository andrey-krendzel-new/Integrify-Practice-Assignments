import "../App.css";
import * as React from "react";

const TodoItem = ({ title, deadline, status }) => {
  //status to CSS converter
  let className;
  switch (status) {
    case "Done":
      className = "itemDone";
      break;
    case "In progress":
      className = "itemInProgress";
      break;
    case "Not started":
      className = "itemNotStarted";
      break;
    default:
      break;
  }

  return (
    <div className={className}>
      <b>{title}</b>
      <br />
      <i>Deadline: {deadline}</i>
    </div>
  );
};

export default TodoItem;
