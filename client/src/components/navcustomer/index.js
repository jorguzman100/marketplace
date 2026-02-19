import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import ThemeToggle from "../themeToggle";
import Brand from "../brand";

function NavCustomer() {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  const { user } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    getLocalStoragePdts();
  }, [location.pathname]);

  const getLocalStoragePdts = () => {
    let count = 0;

    for (let i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i);
      const raw = localStorage.getItem(id);

      if (!raw) {
        continue;
      }

      let product;
      try {
        product = JSON.parse(raw);
      } catch (error) {
        continue;
      }

      if (!product || typeof product !== "object") {
        continue;
      }

      if (typeof product.price === "undefined" || typeof product.quantity === "undefined") {
        continue;
      }

      count += Number(product.quantity) || 0;
    }

    setCounter(count);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const searchPath = process.env.PUBLIC_URL + "/home/productsearch/" + encodeURIComponent(search || "");

  return (
    <Navbar bg="light" expand="lg" className="market-nav">
      <div className="market-nav-inner">
        <div className="market-nav-left">
          <Brand to={process.env.PUBLIC_URL + "/"} />
        </div>

        <div className="market-nav-center">
          <Form inline className="market-search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search products, categories and brands..."
              className="searchSt market-search-input"
              onChange={handleSearchChange}
            />
            <Link to={searchPath} className="market-search-link">
              <span className="market-search-btn">
                <i className="fas fa-search"></i>
              </span>
            </Link>
          </Form>
        </div>

        <div className="market-nav-right">
          <ThemeToggle />
          <Link to={process.env.PUBLIC_URL + "/home/login"} className="market-nav-action">
            <i className="fas fa-user"></i>
            <span>{user.firstName ? `Hi, ${user.firstName}` : "Account"}</span>
          </Link>
          <Link to={process.env.PUBLIC_URL + "/home/shoppingcart"} className="market-nav-action market-nav-cart">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            <span className="cart-counter">{counter}</span>
          </Link>
        </div>
      </div>
    </Navbar>
  );
}

export default NavCustomer;
