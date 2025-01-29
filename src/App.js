import { Layout, Typography } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import TodoList from "./components/TodoList";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
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
      <Content
        style={{
          padding: { xs: "1rem", sm: "2rem" },
          maxWidth: 800,
          width: "100%",
          margin: "24px auto",
          borderRadius: "8px",
        }}
      >
        <TodoList />
      </Content>
    </Layout>
  );
}

export default App;
