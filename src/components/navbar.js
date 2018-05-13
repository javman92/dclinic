import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import logo from '../logo.svg';

const { Header, Content, Footer } = Layout;





class Navi extends React.Component {

  render() {
    return (
<div class="App">

    <Layout className="layout">
    
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}      >

       
         

        <Menu.Item  key="1">{this.props.element1}</Menu.Item>
        <Menu.Item span={3} key="2">{this.props.element2}</Menu.Item>
        <Menu.Item span={3} key="3">{this.props.element3}</Menu.Item>
   
    
      </Menu>
  </Layout>
   <header className="App-header">
       
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a {this.props.clinicName}.</h1>
        </header>
</div>

   
    );
  }
}


export default Navi;