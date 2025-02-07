import React, { useState, useEffect } from "react";
import { Card, Input, List, Button, Space, Modal } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";
import TodoItem from "./TodoItem/TodoItem";

function TodoList() {
  const [todos, setTodos] = useState(() => loadFromLocalStorage("todos", []));
  const [newTodo, setNewTodo] = useState("");
  const [searchText, setSearchText] = useState("");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage("todos", todos);
  }, [todos]);

  // Filter todos based on search
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Add new reset function
  const resetTodos = () => {
    Modal.confirm({
      title: "Are you sure you want to reset all todos?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        setTodos([]);
      },
    });
  };
  // Add updateTodo function in TodoList component
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <Card>
      <Space
        direction="vertical"
        style={{ width: "100%", marginBottom: "20px" }}
      >
        <Input
          placeholder="Search todos..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
        />
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onPressEnter={addTodo}
            size="large"
            onKeyPress={handleKeyPress}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={addTodo}
            size="large"
          >
            Add
          </Button>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={resetTodos}
            size="large"
            disabled={todos.length === 0}
          >
            Reset
          </Button>
        </Space.Compact>
      </Space>

      <List
        dataSource={filteredTodos}
        renderItem={(todo) => (
          <TodoItem
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        )}
      />
    </Card>
  );
}

export default TodoList;
