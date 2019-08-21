import React from 'react';

import { Card,Col, Row,Pagination } from 'antd';
import '../Css/ProductList.css';

const { Meta } = Card;


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentList:[
                (
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src= {require('../Pics/test_pic1.jpg')} />}
                    >
                        <Meta title="A variety of watches" description="From $19 -$25" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src= {require('../Pics/test_pic2.jpg')} />}
                    >
                        <Meta title="A variety of phone cases" description="$18" />
                    </Card>),
            ],
            

          };
    }


    

    render() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
        var test = isAndroid |= isiOS
        
        const rows = []
        if(test == true){
            for(let  i = 0; i < this.state.contentList.length; i++) {
                const element = this.state.contentList[i]
                rows.push(
                    <Row gutter={40}>
                        <Col span={6}>
                            {element}
                        </Col>
                    </Row>
                );
                rows.push(
                    <br></br>
                );
            }
        }else{
            let rowLength = Math.round(this.state.contentList.length/4); 
            for (let i = 0; i < rowLength; i++){
                const cols = []
                for (let count =0; count  <4; count++){
                    let colidx = parseInt(i.toString() + count.toString());
                    if(colidx < this.state.contentList.length){
                        cols.push(
                            <Col span={6}>
                                {this.state.contentList[colidx]}
                            </Col>
                        );
                    }
                }
                rows.push(
                    <Row gutter={40}>
                        {cols}
                    </Row>
                );
                rows.push(
                    <br></br>
                );
            }
           
        }
        

        return (
            <div className = "product">
                <div className = 'content'>
                    {rows}
                    
                  </div>
              
                
                <Pagination defaultCurrent={1} total={5} />
            </div>
            
        );
    }
}

export default ProductList;