import React from 'react';
import { Descriptions } from 'antd';

class contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Descriptions  layout="horizontal">
                <Descriptions.Item label="OwnerName">Cathy Cao</Descriptions.Item>
                <Descriptions.Item label="Contact Number">04 260 0026</Descriptions.Item>
                <Descriptions.Item label="Address">
                4 Hillary Court, Naenae, Lower Hutt
                </Descriptions.Item>
            </Descriptions>
                    );
    }
}

export default contact;
