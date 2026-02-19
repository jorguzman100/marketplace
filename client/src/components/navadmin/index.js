import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import ThemeToggle from "../themeToggle";
import Brand from "../brand";

function NavAdmin() {
  const { user } = useContext(UserContext);

  return (
    <Navbar bg="light" variant="light" className="market-nav admin-nav">
      <div className="market-nav-inner">
        <div className="market-nav-left">
          <Brand to={process.env.PUBLIC_URL + "/admin"} compact />
        </div>

        <div className="market-nav-right">
          <ThemeToggle />
          <Link to={process.env.PUBLIC_URL + "/home"} className="market-nav-action admin-shortcut">
            <i className="fas fa-shopping-bag"></i>
            <span>Storefront</span>
          </Link>
          <div className="admin-user-pill">
            <i className="fas fa-user-shield"></i>
            <span>{user.userName || "Admin"}</span>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default NavAdmin;
