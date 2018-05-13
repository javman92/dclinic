import React, { Component } from 'react';

import './App.css';
import Navi from "./components/navbar"
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
     
      <Navi element1="Nosotros" element2="Ingresar" element3="Registro" clinicName="Megasalud"/>

        

    );
  }
}

export default App;
