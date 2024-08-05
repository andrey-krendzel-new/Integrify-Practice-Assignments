import TodoItem from "./TodoItem";
import "../App.css";

function TodoList() {
  return (
    <div>
      <TodoItem title="test" description="description" status="itemDone" />
    </div>
  );
}

export default TodoList;
