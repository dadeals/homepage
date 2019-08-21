import React from 'react';

import { Card,Col, Row,Pagination } from 'antd';
import '../Css/ProductList.css';

const { Meta } = Card;


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }


    render() {
        return (
            <div className = "product">
                <div className = 'content'>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src= {require('../Pics/test_pic1.jpg')} />}
                                >
                                    <Meta title="A variety of watches" description="From $19 -$25" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src= {require('../Pics/test_pic2.jpg')} />}
                                >
                                    <Meta title="A variety of phone cases" description="$18" />
                            </Card>
                        </Col>


                    </Row>

                </div>
                
                
                <Pagination defaultCurrent={1} total={5} />
            </div>
            
        );
    }
}

export default ProductList;