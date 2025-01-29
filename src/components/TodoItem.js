import React, { useState } from "react";
import { List, Button, Input } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";

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
    <List.Item
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
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "#999" : "inherit",
            display: "inline-block",
            width: "100%",
          }}
          onClick={handleEdit}
        >
          {todo.text}
        </span>
      )}
    </List.Item>
  );
}

export default TodoItem;
