import React, { useState } from 'react';
import './App.css';
import { Layout, Space } from "antd";
import {
  headerStyle,
  contentStyle,
  footerStyle,
  siderStyle,
} from "./layout/LayoutDesign";
import CloudFooter from './components/common/CloudFooter';
import MainPage from './components/content/mainPage/MainPage';
import HeaderPage from './components/common/header/HeaderPage';
import SideBar from './components/sidebar/SideBar';
const { Header, Footer, Sider, Content } = Layout;



function App() {
  const [openSide, setOpenSide] = useState(false);
  const openSideHandeler = () => {
    setOpenSide(!openSide);
  }
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", position: "relative" }}
      size={[0, 48]}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "42px",
            height: "150px",
            background: "#0097C2",
          }}
        ></div>
        <Layout>
          <Header style={headerStyle}>
            <HeaderPage openSideHandeler={openSideHandeler} />
          </Header>
          <Content style={contentStyle}>
            <MainPage />
          </Content>
          <Footer style={footerStyle}>
            <CloudFooter />
          </Footer>
        </Layout>
        {openSide ? (
          <Sider style={siderStyle} width={355}>
            <SideBar openSideHandeler={openSideHandeler} />
          </Sider>
        ) : (
          ""
        )}
      </Layout>
    </Space>
  );
}

export default App;
