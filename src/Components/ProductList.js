import React from 'react';

import { Card,Col, Row,Pagination } from 'antd';
import '../Css/ProductList.css';

const { Meta } = Card;


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPage:1,
            contentList:[
                (
                    <Card
                        hoverable
                        style={{  width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/test_pic1.jpg')} />}
                    >
                        <Meta title="Watches" description=" From $19 -$25" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{  width:180 }}
                        cover={<img alt= "pic" src= {require('../Pics/test_pic2.jpg')} />}
                    >
                        <Meta title="Phone Cases" description="$18" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/plasticflower2-5-15-0.jpg')} />}
                    >
                        <Meta title="Flower(Plastic)" description="From $2.5 to 15" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/beads8each3pack20.jpg')} />}
                    >
                        <Meta title="Beads" description="$8 each 3 packs $20" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/coffincover49-225.jpg')} />}
                    >
                        <Meta title="Coffin Cover" description="From $40 to 225" />
                    </Card>),   
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/factorymadenecklace8-.jpg')} />}
                    >
                        <Meta title="Necklace(Factory)" description="$8" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/feather4-5.jpg')} />}
                    >
                        <Meta title="Feather" description="$4.5" />
                    </Card>),  
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/Fhat40.jpg')} />}
                    >
                        <Meta title="Female Hat" description="$40" />
                    </Card>),      
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/flowerlei2-0-3-5.jpg')} />}
                    >
                        <Meta title="Flower Lei" description="From $2 to $3.5" />
                    </Card>),       
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/headflower2-10.jpg')} />}
                    >
                        <Meta title="Flower(Head)" description="From $2 to $10" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/materials25-50.jpg')} />}
                    >
                        <Meta title="Materials" description="From $25 to $50" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/pacicloth49-119.jpg')} />}
                    >
                        <Meta title="Pacific Cloths" description="From $49 to $119" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/perfume5-20.jpg')} />}
                    >
                        <Meta title="Perfume" description="From $5 to $20" />
                    </Card>),
                (
                    <Card
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt= "pic" src= {require('../Pics/ribbens2-0-2-5.jpg')} />}
                    >
                        <Meta title="Ribbens" description="From $2 to $2.5" />
                    </Card>),                                                                                                                                                                             
            ],
            

          };
    }

    onChange = page => {
        console.log(page);
        this.setState({
          currentPage: page,
        });
      };

    render() {
        let u = navigator.userAgent;
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
        let test = isAndroid |= isiOS
        
        // arrange different layout of product for different resolution
        var rowSize,rowLength, spanSize, pageSize;
        var rows = []
        
        if(test == true){

            rowSize = 2;
            rowLength = Math.ceil(this.state.contentList.length/rowSize); 
            spanSize = 11;
            pageSize = 2;

        }else{
            rowSize = 6;
            rowLength = Math.ceil(this.state.contentList.length/rowSize); 
            spanSize = 4;
            pageSize = 3;
           
        }

        //make rows
        let cards = Array.from(this.state.contentList);

        for (let i = 0; i < rowLength; i++){
            var cols = []
            for (let count =0; count  < rowSize; count++){
                let element = cards.shift();
                if(typeof element !== 'undefined'){
                    cols.push(
                        <Col span={spanSize}>
                            {element}
                        </Col>
                    );
                }
            }
            rows.push(
                <div>
                    <Row gutter={40}>{cols}</Row>
                    <br></br>
                </div>
                
            );

        }

        // make pages
        var pages = []
        let rowsCopy = Array.from(rows);
        var pageLength = Math.ceil(rows.length/pageSize); 
        for(let i =0; i <pageLength; i ++){
            let page = []
            for(let count =0; count < pageSize; count++){
                let row = rowsCopy.shift();
                if(typeof row !== 'undefined'){
                    page.push(row)
                }
            }
            pages.push(page)
        }

        
        return (
            <div className = "product">
                <div className = 'content'>
                    {pages[this.state.currentPage-1]}
                  </div>

                <Pagination simple defaultCurrent={1} onChange={this.onChange} defaultPageSize={this.state.currentPage} total={pageLength} />
            </div>
            
        );
    }
}

export default ProductList;