import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'
import {  Dropdown, Button, Icon, message } from 'antd';
const { Header, Content, Footer } = Layout;

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Santiago</Menu.Item>
    <Menu.Item key="2">Concepción</Menu.Item>
    <Menu.Item key="3">La Serena</Menu.Item>
  </Menu>
);
class Select extends Component {
  render() {
    return (
     <div>
    
        <Row>
        
        <Col  >
         Seleccione sucursal </Col>
      <Col span={2}  > 

    <Dropdown overlay={menu}>
      <Button style={{ marginLeft: 2 }}>
        Ciudad <Icon type="down" />
      </Button>
    </Dropdown></Col>
    <Col > <Button type="primary" >Mapa</Button></Col>
    </Row>
    

    <Row>
        <Col  ></Col>
        <Col >Pedir hora con especialista</Col>

    </Row>


        
      </div>
    );
  }
}

export default Select;
