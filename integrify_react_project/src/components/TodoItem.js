import "../App.css";
import * as React from "react";
import styles from '../App.css';

const TodoItem = ({title, description, status}) => {
    return (
      <div className={status}>
        <b>{title}</b>
        <br />
        <i>{description}</i>
      </div>
    );
  }

export default TodoItem;