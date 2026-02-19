import React, { useContext} from "react";
import Container from 'react-bootstrap/Container';
import PersonalInfoForm from "../components/checkoutperinfo";
import AddressForm from "../components/checkoutaddress";
import PaymentForm from "../components/checkoutpayment";
import Row from 'react-bootstrap/Row';
import "./styles.css";
import NavCustomer from '../components/navcustomercheckout'
import Footer from '../components/footercustomercheckout'
import UserContext from "../utils/UserContext"
import { Redirect, useLocation } from "react-router-dom";
import { CHECKOUT_PROGRESS, getCheckoutProgress } from "../utils/checkoutProgress";

function PDP() {
 const {user} = useContext(UserContext)
 const location = useLocation();
 const isCheckFlow = location.pathname.includes("/check");
 const reviewPath = isCheckFlow ? process.env.PUBLIC_URL + "/check" : process.env.PUBLIC_URL + "/home/shoppingcart";
 const progress = getCheckoutProgress();


  return (
    <>
      {progress < CHECKOUT_PROGRESS.PAYMENT ? <Redirect to={reviewPath} /> : null}
    
      <NavCustomer />
      <Container className="marg minht" fluid>
        <Row>
          <div className="col-xl-3 col-md-12">
            <h1>Personal Information</h1>
            <PersonalInfoForm consumer={user} />
          </div>
          <div className="col-xl-3 col-md-12">
            <h1>Address</h1>
            <AddressForm consumer={user} />
          </div>
          <div className="col-xl-5 col-md-12">
            <h1>Add Payment details</h1>
            <PaymentForm consumer={user} />
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default PDP;
