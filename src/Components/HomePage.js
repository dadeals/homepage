import React from 'react';
import { Form, Icon, Input, Button, Checkbox, PageHeader } from 'antd';
import '../Css/HomePage.css';

 
class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
 
  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <div className="welcome">
        
        <PageHeader title="Welcome to DaDeals NaeNae"></PageHeader>


      </div>
    );
  }
}
 


export default Form.create({ name: 'normal_login' })(Homepage);