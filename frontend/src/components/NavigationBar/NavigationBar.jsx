import React from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';


const Navigationbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
      <div className="navBar">
        <ul>
          <li className="brand">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <b>Home</b>
            </Link>
          </li>
          <li className="brand">
            <Link to ="/contact_us" style={{ textDecoration: "none", color: "white" }}>
              <b>Contact Us</b>
            </Link>
          </li>
          <li className="brand">
            <Link to ="/about_us" style={{ textDecoration: "none", color: "white" }}>
              <b>About Us</b>
            </Link>
          </li>
          <li className="brand">
            <Link to ="/cart" style={{ textDecoration: "none", color: "white" }}>
              <b>Cart</b>
            </Link>
          </li>
          <li>
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navigationbar;