import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Navi from "./components/navbar"
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'
import {  Dropdown, Button, Icon, message } from 'antd';
import Select from "./components/select"
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
class App extends Component {
  render() {
    return (
     <div>
      <Navi element1="Nosotros" element2="Ingresar" element3="Registro" clinicName="Megasalud"/>
      <Select/>



      </div>
    );
  }
}

export default App;
