import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;





class Navi extends React.Component {

  render() {
    return (

<Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">{this.props.element1}</Menu.Item>
        <Menu.Item key="2">{this.props.element2}</Menu.Item>
        <Menu.Item key="3">{this.props.element3}</Menu.Item>
      </Menu>
    </Header>
  
  </Layout>


   
    );
  }
}


export default Navi;