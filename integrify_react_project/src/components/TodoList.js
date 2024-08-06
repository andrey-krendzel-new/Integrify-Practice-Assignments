import TodoItem from "./TodoItem";
import "../App.css";

const TodoList = ({todos}) => {
  return(
  <div>
  {todos.map((todo, index) => (
    <TodoItem
      key={index} // Assuming each todo has a unique 'id' property
      title={todo.title}
      deadline={todo.deadline}
      status={todo.status}
    />
  ))}
</div>);
}

export default TodoList;
