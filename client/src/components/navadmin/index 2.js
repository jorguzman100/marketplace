import React, { useContext} from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./style.css";
import UserContext from "../../utils/UserContext";

function NavCustomer() {
  const {user} = useContext(UserContext)
  return (
    <Navbar bg="light" variant="light" className="navmarginAdmin">
      <Navbar.Brand>
        <Link
          to={process.env.PUBLIC_URL + '/admin'}
        >
          <img
            alt=""
            src={process.env.PUBLIC_URL + '/Images/logo.png'}
            className="d-inline-block align-top brand-logo-admin"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <span className="bldd">{user.userName}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavCustomer;
