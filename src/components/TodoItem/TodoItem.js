import React, { useState } from "react";
import { Button, Input } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { ListItemStyled, EditOutlinedStyled } from "./TodoItemStyled";

function TodoItem({ todo, toggleComplete, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    !todo.completed && setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() !== "") {
      updateTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <ListItemStyled
      className="todo-item"
      key={todo.id}
      actions={[
        <Button
          type={todo.completed ? "primary" : "default"}
          icon={<CheckOutlined />}
          onClick={() => toggleComplete(todo.id)}
        />,
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => deleteTodo(todo.id)}
        />,
      ]}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={handleEdit}
      >
        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onPressEnter={handleSave}
            autoFocus
            onKeyPress={handleKeyPress}
          />
        ) : (
          <>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#999" : "inherit",
              }}
            >
              {todo.text}
            </span>
            {!todo.completed && (
              <EditOutlinedStyled className="hover-edit-icon" />
            )}
          </>
        )}
      </div>
    </ListItemStyled>
  );
}

export default TodoItem;
