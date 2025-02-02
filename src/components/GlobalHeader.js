import { Layout, Typography, Avatar, Dropdown, Space } from "antd";
import {
  UnorderedListOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

const GlobalHeader = () => {
  const menuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
    },
  ];

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "logout":
        console.log("Logout clicked");
        break;
      default:
        console.log(`${key} clicked`);
    }
  };

  return (
    <Header
      style={{
        background: "#1890ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <Space>
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
      </Space>

      <Dropdown
        menu={{
          items: menuItems,
          onClick: handleMenuClick,
        }}
        placement="bottomRight"
        arrow
      >
        <Avatar
          size={40}
          icon={<UserOutlined />}
          style={{
            backgroundColor: "#fff",
            color: "#1890ff",
            cursor: "pointer",
          }}
        />
      </Dropdown>
    </Header>
  );
};

export default GlobalHeader;
