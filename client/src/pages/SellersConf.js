import React from "react";
import { InputGroup, Button, ListGroup, Image } from 'react-bootstrap';

// Custom components
import Form from '../components/adminSellerForm';

/* 
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  picture: { type: String, required: true },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "store"
  },
  memberSince: { type: Date, default: Date.now }  
*/


function SellersConfig({
    sellers,
    handleSellerSaveButton,
    handleSellerDeleteButton,
    handleSellerInputOnChange
}) {
    // const currentSellers = ['Seller 1', 'Seller 2', 'Seller 3']

    let currentSellers = [];

    if (sellers) {
        if (sellers.length > 0) {
            currentSellers = [...sellers];
        }
    }


    return (
        <div>
            <h4><strong>Manage your sellers</strong></h4>

            <h5>Current sellers</h5>
            <ListGroup>
                {currentSellers.map((seller, index) => {
                    return (
                        <InputGroup key={index} className="mb-3">
                            <InputGroup.Prepend>
                                <Image src={seller.picture} roundedCircle />
                            </InputGroup.Prepend>
                            <ListGroup.Item >{`${seller.firstName} ${seller.lastName}`}</ListGroup.Item>
                            <InputGroup.Append>
                                <Button
                                    variant="outline-secondary"
                                    data-sellerid={seller._id}
                                    onClick={handleSellerDeleteButton}
                                >Delete</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    );
                })}
            </ListGroup>

            <h5>Create a new seller</h5>
            <Form
                handleSellerSaveButton={handleSellerSaveButton}
                handleSellerInputOnChange={handleSellerInputOnChange}
            />
        </div>
    );
}

export default SellersConfig;