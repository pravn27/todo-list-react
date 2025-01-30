import { Layout } from "antd";
import GlobalHeader from "./components/GlobalHeader";
import TodoList from "./components/TodoList";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <GlobalHeader />
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
