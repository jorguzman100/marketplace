import React from "react";
import { Card, Row, Col, ListGroup } from 'react-bootstrap';

/* 
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "product"
    }
  ],
  storeID: {
    type: Schema.Types.ObjectId,
    ref: "store"
  },
  customerID: {
    type: Schema.Types.ObjectId,
    ref: "consumer"
  },
  orderStatus: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  Date: { type: Date, default: Date.now }
*/

function OrdersConfig({ orders }) {
    // const currentOrders = ['Order 1', 'Order 2', 'Order 3'];
    //const products = ['Product 1', 'Product 2', 'Product 3'];

    let currentOrders = [];

    if (orders) {
        if (orders.length > 0) {
            currentOrders = [...orders];
        }
    }


    return (
        <div>
            <h4><strong>Manage your orders</strong></h4>

            <h5>Orders</h5>
            {currentOrders.map((order, index) => {
                return (
                    <Card body key={index}>
                        <h6>Order id: <strong>{order._id}</strong></h6>
                        <Row>
                            <Col>
                                <p className='text-muted py-0 my-0'>Date: {order.Date} </p>
                                <p className='text-muted py-0 my-0'>Store ids: {
                                    order.storeID.map((storeID, index) => {
                                        return (
                                            <span key={index} className='py-0 my-0'>{storeID}</span>);
                                    })
                                } </p>
                                <p className='text-muted py-0 my-0'>Customer id: {order.customerID} </p>
                                <p className='text-muted py-0 my-0'>Total amount: {order.totalAmount} </p>
                                <p className='text-muted py-0 my-0'>Order status: {order.orderStatus} </p>
                            </Col>
                            <Col>
                                <p className='text-muted py-0 my-0'>Products: </p>
                                <ListGroup>
                                    {order.products.map((product, index) => {
                                        return (
                                            <ListGroup.Item key={index} className='text-muted py-0 my-0'>{product.quantity} {product.productName}</ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Col>
                        </Row>
                    </Card>
                );
            })}
        </div>
    );
}

export default OrdersConfig;