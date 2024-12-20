import React, { FC } from "react";
import { Task } from "../App";

interface TodoItemProps {
  todo: Task; //{ id: number; text: string }
  onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
