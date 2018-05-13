import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'
import {  Dropdown, Button, Icon, message } from 'antd';
import Calendar from "./calendar"
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

const especialidades = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Medicina general</Menu.Item>
    <Menu.Item key="2">Odontología</Menu.Item>
    <Menu.Item key="3">Nutricionista</Menu.Item>
  </Menu>
);
const medicos = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Juan Osvaldo</Menu.Item>
    <Menu.Item key="2">Pedro Barriga</Menu.Item>
    <Menu.Item key="3">Paloma Pé</Menu.Item>
  </Menu>
);

class Select extends Component {
  render() {
    return (
     <div>

     <Row>
     <Col span={4} >
    <span>
        <br />
    </span>
        <Row>
        
            <Col  >
                Seleccione sucursal 
            </Col>
            <Col span={2}  > 
                <Dropdown overlay={menu}>
                  <Button style={{ marginLeft: 2 }}>
                        Ciudad     <Icon type="down" />
                  </Button>
                </Dropdown>
            </Col>
           
        </Row>
    

    <Row>
        <span> <br /></span>
        <Col >Especialidad</Col>

    </Row>

    <Row>
        
            
            <Col span={2}  > 
                <Dropdown overlay={especialidades}>
                  <Button style={{ marginLeft: 2 }}>
                        Especialidad <Icon type="down" />
                  </Button>
                </Dropdown>
            </Col>
            
    </Row>

    <span>
        <br />
    </span>
    <Row>
            <Col >Médico</Col>
            
            <Col span={2}  > 
                <Dropdown overlay={medicos}>
                  <Button style={{ marginLeft: 2 }}>
                        Médico <Icon type="down" />
                  </Button>
                </Dropdown>
            </Col>
            
    </Row>
    </Col>
    <Col span={18}>
    <Calendar/>
    </Col>
    </Row>

        
      </div>
    );
  }
}

export default Select;
