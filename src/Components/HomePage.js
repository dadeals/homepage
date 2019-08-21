import React from 'react';
import { PageHeader, Typography } from 'antd';
import '../Css/HomePage.css';

const { Paragraph } = Typography;


const content = (
    <div className="content">
      <Paragraph>
        Today's promotion
      </Paragraph>
  
      <p className="contentLink">
       
        <a>
          <img src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" alt="info" />
          Product Info
        </a>
        
      </p>
    </div>
  );

  const extraContent = (
    <img
      src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
      alt="content"
    />
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
        
        <PageHeader title="Welcome to DaDeals NaeNae" >
            <div className="clock">{this.state.time.toLocaleDateString()} {this.state.time.toUTCString()}</div>
              <div className="wrap">
                  <div className="content">{content}</div>
                  <div className="extraContent">{extraContent}</div>
                  
            </div>
                
         </PageHeader>

      </div>


    );
  }
}
 


export default Homepage;