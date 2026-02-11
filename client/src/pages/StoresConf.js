import React from "react";
import { Card, Row, Col, ListGroup, Image, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

/* 
  storeName: { type: String, required: true },
  storePicture: { type: String, required: true },
  products: [
    {
      type:Schema.Types.ObjectId,
      ref: "product"
    }
  ],
  seller: {
    type: Schema.Types.ObjectId,
    ref: "seller"
  }
*/

function StoresConfig({
    allStores,
    allproducts,
    sellers,
    categories,
    handleStoreSaveButton,
    handleNewStoreInputOnChange,
    handleNewStoreCheckOnChange,
    handleStoreDeleteButton
}) {
    const stores = allStores.slice(0);
    const products = allproducts.slice(0);
    const currentSellers = sellers.slice(0);
    const sellerNames = sellerId => {
        let sellerName = "";
        currentSellers.map((seller) => {
            if (seller._id === sellerId) {
                sellerName = seller.firstName.concat(" ", seller.lastName)
            }
            return sellerName
        })
        return sellerName
    }
    function productNames(productId) {
        let singleProductName = "";
        products.map((product) => {
            if (product._id === productId) {
                singleProductName = product.productName
            }
            return singleProductName
        })
        return singleProductName
    }
    return (
        <div>
            <h4><strong>Manage your stores</strong></h4>

            <h5>Current stores</h5>
            {stores.map((store, index) => {
                return (
                    <Card body key={index}>
                        <h6>{store.storeName}</h6>
                        <Row>
                            <Col>
                                <p className='text-muted py-0 my-0'>Store id: {store._id} </p>
                                <p className='text-muted py-0 my-0'>Store name: {store.storeName}</p>
                                <p className='text-muted py-0 my-0'>Seller name: {sellerNames(store.seller)}</p>
                                <Image src={store.storePicture} rounded />
                            </Col>
                            <Col>
                                <p className='text-muted py-0 my-0'>Products: </p>
                                <ListGroup className='pb-5'>
                                    {store.products.map((product, index) => {
                                        return (
                                            <ListGroup.Item key={index} className='text-muted py-0 my-0'>{productNames(product)}</ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                                <Button
                                    variant="outline-secondary"
                                    data-categoryid={store._id}
                                    onClick={handleStoreDeleteButton}
                                >

                                    Delete</Button>
                            </Col>
                        </Row>
                    </Card>
                );
            })}

            <h5>Create a new store</h5>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="storeName">Store name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder=""
                        aria-label="storeName"
                        aria-describedby="storeName"
                        onChange={handleNewStoreInputOnChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="storePicture">Store picture</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="URL"
                        aria-label="storePicture"
                        aria-describedby="storePicture"
                        onChange={handleNewStoreInputOnChange}
                    />
                </InputGroup>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a Seller</Form.Label>
                    <Form.Control
                        as="select"
                        aria-label="seller"
                        onChange={handleNewStoreInputOnChange}
                    >
                        <option>Select your Seller</option>
                        {currentSellers.map((seller, index) => {
                            return (
                                <option key={index} value={seller._id}>{seller.firstName} {seller.lastName}</option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>

                <p>Select the products for your store:</p>
                {products.map((product, index) => {
                    return (
                        <Form.Check
                            custom
                            type='checkbox'
                            key={index}
                            id={product._id}
                            label={product.productName}
                            value={product._id}
                            aria-label="products"
                            onChange={handleNewStoreCheckOnChange}
                        />
                    );
                })}

                <Button
                    className='mt-5'
                    variant="outline-secondary"
                    onClick={handleStoreSaveButton}
                >Create</Button>
            </Form>
        </div>
    );
}

export default StoresConfig;