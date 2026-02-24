import React, { useEffect, useState } from "react";
import MasterCustomer from './pages/MasterCustomer'
import MasterAdmin from './pages/MasterAdmin'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import MasterCheckout from './pages/MasterCustomerCheckout'
import UserContext from "./utils/UserContext"
import ThemeContext from "./utils/ThemeContext"

// Add Stripe to your React app
// Use the Stripe.js and the Stripe Elements UI library to stay PCI compliant by ensuring that card details go directly to Stripe and never reach your server.
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./components/CheckoutForm";
// import CheckoutForm from "./components/CheckoutForm";


// Load Stripe.js
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
// const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
// const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);


function App() {
  const getInitialTheme = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("theme"));
      if (stored === "dark" || stored === "light") {
        return stored;
      }
    } catch (error) {
      localStorage.removeItem("theme");
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  };

  const [user, setUser] = useState({
    userName: "",
    userType: "",
    consumerAddress: {},
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobile: "",
    picture: "",
    paymentMethod: "",
  })
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };


  // Initialize Stripe Elements
  // Pass the resulting promise from loadStripe to the Elements provider. This allows the child components to access the Stripe service via the Elements consumer.
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UserContext.Provider value={{user, setUser}}>
          <Wrapper>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={MasterCustomer} />
              <Route path={process.env.PUBLIC_URL + '/admin'} component={MasterAdmin} />
              <Route path={process.env.PUBLIC_URL + '/home'} component={MasterCustomer} />
              <Route path={process.env.PUBLIC_URL + '/check'} component={MasterCheckout} />
              {/*  <Elements stripe={promise}>
                <Route path={process.env.PUBLIC_URL + '/checkout'} component={CheckoutForm} />
              </Elements> */}
              <Route component={MasterCustomer} />
            </Switch>
          </Wrapper>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;

/* <CheckoutForm /> */
