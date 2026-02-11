import React from "react";
// import NavCustomer from '../components/navcustomer'
// import Categories from '../components/categoriescustomer'
// import Footer from '../components/footercustomer'
import HomeCustomer from './Home.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Productdp from "./PDPCustomer"
import LogIn from "./LogIn"
import ResumeCheckout from "./ResumeCheck"
import ResumePayment from './ResumePayment'
import ResumeConfirmation from './ResumeConfirmation'
import Plp from "./PLPCustomer"
import PlpSearch from "./PLPCustomerSearch"
import ScrollToTop from "../components/scrollToTop";
import MasterAdmin from "./MasterAdmin"
// import Checkout from "./Checkout"

function MasterCustomer() {



  return (

    
    <Router>
      <ScrollToTop />
      <Wrapper>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/home'} component={HomeCustomer} />
          <Route path={process.env.PUBLIC_URL + '/home/product/:_id'} component={() => {
            return (
              <Productdp />
            );
          }} />
          <Route path={process.env.PUBLIC_URL + '/home/productlist'} component={Plp} />
          <Route path={process.env.PUBLIC_URL + '/home/productsearch'} component={PlpSearch} />
          <Route path={process.env.PUBLIC_URL + '/home/login'} component={LogIn} />
          <Route path={process.env.PUBLIC_URL + '/home/shoppingcart'} component={ResumeCheckout} />
          <Route path={process.env.PUBLIC_URL + '/home/payment'} component={ResumePayment} />
          <Route path={process.env.PUBLIC_URL + '/home/confirmation'} component={ResumeConfirmation} />
          <Route path={process.env.PUBLIC_URL + '/admin'} component={MasterAdmin} />
          <Route component={HomeCustomer} />
        </Switch>
      </Wrapper>
    </Router>

          // <LogIn
          // handleLogInSuccess ={handleLogInSuccess}
          // />
  );
}

export default MasterCustomer;
