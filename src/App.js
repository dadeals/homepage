import React from 'react';
import Show from './Components/Show'
import HomePage from './Components/HomePage'; 
import Query from './Components/Query';
import Contact from './Components/contact';
import logo from './Components/logo307105.jpg';
import './Css/App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const routes = [
  {
    path: '',
    breadcrumbName: 'home',
  },
  {
    path: 'Show',
    breadcrumbName: 'Show',
  },
  {
    path: 'Query',
    breadcrumbName: 'Query',
  },
];

function  itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
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

            {/* <Breadcrumb itemRender={itemRender} routes={routes} style={ {margin: '16px 0'} } /> */}
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="0" ><img src = {logo} style={{  width: 102, height: 35, lineHeight: '64px' }} /></Menu.Item>
              <Menu.Item key="1" ><Link to= "/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to= "/Show">Show</Link></Menu.Item>
              <Menu.Item key="3"><Link to= "/Query">Query</Link></Menu.Item>
            </Menu>
            
            <div className= "wrap">
              <Route path="/" exact component={HomePage} />
              <Route path="/Show/" component={Show} />
              <Route path="/Query/" component={Query} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'left' }}><Contact></Contact></Footer>
        </Layout>

        
      </div>
      </Router>
    );
  }
}

export default App;
