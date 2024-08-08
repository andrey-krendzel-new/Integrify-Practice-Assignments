import TodoItem from "./TodoItem";
import "../App.css";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index} 
          title={todo.title}
          deadline={todo.deadline}
          status={todo.status}
        />
      ))}
    </div>
  );
};

export default TodoList;
