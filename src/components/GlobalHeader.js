import React from "react";
import { Layout, Typography } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Title } = Typography;

const GlobalHeader = () => {
  return (
    <Header
      style={{
        background: "#1890ff",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <UnorderedListOutlined
        style={{
          fontSize: "24px",
          color: "#fff",
          marginRight: "12px",
        }}
      />
      <Title
        level={3}
        style={{
          color: "#fff",
          margin: 0,
          lineHeight: "64px",
        }}
      >
        Todo List
      </Title>
    </Header>
  );
};

export default GlobalHeader;
