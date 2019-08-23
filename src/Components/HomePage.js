import React from 'react';
import { PageHeader, Typography } from 'antd';
import '../Css/HomePage.css';
import { createRequireFromPath } from 'module';

const { Paragraph,Title, Text } = Typography;


const content = (
    <div className="content">
      <br></br>
      
      <Text strong>All kinds of clothings and head flowers. You will also able to find many cheap craft supplies here! Come shop you bargains here today!</Text>
      {/* <div className="contentPic">
        <img src={require('../Pics/shopfront.jpg')} />
 
      </div> */}
    </div>
  );

  const extraContent = (
    <div className ="newproduct">
      <br></br>
      <Text mark>NEW PRODUCTS!!</Text> 
      <Text strong> handmade necklaces $25 - $30</Text>
      <img
      src= {require('../Pics/necklaces.jpg')}
      alt="content"
      style={{ width: 240 }}
    />


    </div>
    
  );


class Homepage extends React.Component {

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
      <div className="welcome">
        <br></br>
        <Title level={3}  >Welcome to DaDeals NaeNae</Title>
            <div className="clock">{this.state.time.toLocaleDateString()} {this.state.time.toUTCString()}</div>
              <div className="wrap">
                  <div className="content">{content}</div>
                  <div className="extraContent">{extraContent}</div>
                  
            </div>
                
        

      </div>


    );
  }
}
 


export default Homepage;