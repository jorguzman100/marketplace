import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../themeToggle";
import Brand from "../brand";
import { CHECKOUT_PROGRESS, getCheckoutProgress } from "../../utils/checkoutProgress";

function NavCustomerCheckout() {
  const location = useLocation();
  const path = location.pathname;
  const [progress, setProgress] = useState(CHECKOUT_PROGRESS.REVIEW);

  useEffect(() => {
    setProgress(getCheckoutProgress());
  }, [path]);

  const isCompactRoute = path.includes("/check");

  const reviewPath = isCompactRoute ? process.env.PUBLIC_URL + "/check" : process.env.PUBLIC_URL + "/home/shoppingcart";
  const paymentPath = isCompactRoute ? process.env.PUBLIC_URL + "/check/payment" : process.env.PUBLIC_URL + "/home/payment";
  const confirmationPath = isCompactRoute
    ? process.env.PUBLIC_URL + "/check/confirmation"
    : process.env.PUBLIC_URL + "/home/confirmation";

  const stepReview = path.includes("/shoppingcart") || path.endsWith("/check");
  const stepPayment = path.includes("/payment");
  const stepConfirmation = path.includes("/confirmation");

  const steps = [
    {
      label: "Review",
      to: reviewPath,
      step: CHECKOUT_PROGRESS.REVIEW,
      active: stepReview,
      done: progress > CHECKOUT_PROGRESS.REVIEW,
    },
    {
      label: "Shipment & Payment",
      to: paymentPath,
      step: CHECKOUT_PROGRESS.PAYMENT,
      active: stepPayment,
      done: progress > CHECKOUT_PROGRESS.PAYMENT,
    },
    {
      label: "Confirmation",
      to: confirmationPath,
      step: CHECKOUT_PROGRESS.CONFIRMATION,
      active: stepConfirmation,
      done: false,
    },
  ];

  return (
    <Navbar bg="light" expand="lg" className="market-nav checkout-nav">
      <div className="market-nav-inner">
        <div className="market-nav-left">
          <Brand to={process.env.PUBLIC_URL + "/"} />
        </div>

        <div className="market-nav-right checkout-nav-right">
          <ThemeToggle />
          <div className="checkout-stepper">
            {steps.map((step, index) => {
              const enabled = progress >= step.step;
              const className = `checkout-step ${step.active ? "is-active" : ""} ${step.done ? "is-done" : ""} ${enabled ? "" : "is-locked"}`;

              if (!enabled) {
                return (
                  <span key={step.label} className={className}>
                    <span className="checkout-step-index">{index + 1}</span>
                    <span className="checkout-step-label">{step.label}</span>
                  </span>
                );
              }

              return (
                <Link
                  key={step.label}
                  to={step.to}
                  className={className}
                >
                  <span className="checkout-step-index">{index + 1}</span>
                  <span className="checkout-step-label">{step.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default NavCustomerCheckout;
