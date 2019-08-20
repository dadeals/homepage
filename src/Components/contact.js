import React from 'react';
import { Descriptions } from 'antd';

class contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Descriptions title="Contact Info" layout="vertical">
                <Descriptions.Item label="OwnerName">Cathy Cao</Descriptions.Item>
                <Descriptions.Item label="Contact Number">04 5770177</Descriptions.Item>
                <Descriptions.Item label="Address">
                3 Hillary Court, Naenae, Lower Hutt
                </Descriptions.Item>
            </Descriptions>
                    );
    }
}

export default contact;