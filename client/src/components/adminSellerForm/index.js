import React from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

const sellerForm = ({ handleSellerInputOnChange, handleSellerSaveButton }) => {

    return (
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>User name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder=""
                    aria-label="userName"
                    aria-describedby="userName"
                    onChange={handleSellerInputOnChange}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="firstName">First name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder=""
                    aria-label="firstName"
                    aria-describedby="firstName"
                    onChange={handleSellerInputOnChange}
                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="lastName">Last name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder=""
                    aria-label="lastName"
                    aria-describedby="lastName"
                    onChange={handleSellerInputOnChange}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="password">Password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder=""
                    aria-label="password"
                    aria-describedby="password"
                    onChange={handleSellerInputOnChange}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="email">Email</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder=""
                    aria-label="email"
                    aria-describedby="email"
                    onChange={handleSellerInputOnChange}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="mobile">Mobile</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder=""
                    aria-label="mobile"
                    aria-describedby="mobile"
                    onChange={handleSellerInputOnChange}
                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="picture">Picture</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="URL"
                    aria-label="picture"
                    aria-describedby="picture"
                    onChange={handleSellerInputOnChange}
                />
            </InputGroup>

            <Button
                variant="outline-secondary"
                onClick={handleSellerSaveButton}
            >Create</Button>
        </Form>
    );

}

export default sellerForm;