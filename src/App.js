import React from 'react';

import HomePage from './Components/HomePage'; 
import ProductList from './Components/ProductList'
import Contact from './Components/contact';
import logo from './Components/logo307105.jpg';

import './Css/App.css';
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time:new Date()
    };
    setInterval(function(){
 
      this.setState({

          time:new Date()

      });

      }.bind(this),1000);
  }


  render() {

    return (
      <Router>
        <div className = "App" >
        <Layout className="layout">
          <Header>
            <div className="logo"  />
            
          </Header>
          
          <Content style={{ padding: '0 50px' }}>

            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >

              <Menu.Item key="1" ><Link to= "/"><img src = {logo} style={{  width: 102, height: 35, lineHeight: '64px' }} /></Link></Menu.Item>
              <Menu.Item key="2"><Link to= "/ProductList">ProductList</Link></Menu.Item>
 
              
            </Menu>

            <div className= "wrap">
              <Route path="/" exact component={HomePage} />
              <Route path="/ProductList/" component={ProductList} />

            </div>
          </Content>

          <Footer style={{ textAlign: 'left' }}>

            <Contact></Contact>
            </Footer>
        </Layout>

        
      </div>
      </Router>
    );
  }
}

export default App;
