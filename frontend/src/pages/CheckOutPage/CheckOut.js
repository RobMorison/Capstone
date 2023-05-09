import { loadStripe } from "@stripe/stripe-js";
import CardIcon from "../../images/credit-card.svg";
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import "./CheckOut.css"


//This is what we will use to grab the data being passed over
import { useLocation } from "react-router-dom";
import axios from 'axios'

import "../../App.css";


let stripePromise;

const getStripe = () => {
    
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51MuetgATWQSQDpE3eYqKVSZkj08qTQZ1YAQxrhl7jIH9PJQFayZEv7b4iUxx3QLoxswzykCsRyeLXmdazMLGWvQ500jIBuxtBz");
    }
    
    return stripePromise;
};

const Checkout = () => {
  const {state} = useLocation();
  const[user, token] = useAuth();
  const[test, setTest] = useState([state])
  console.log('checkout item', ...test);
  const item = state.map(el => {
    return(
      {
        price: el.product.stripe_price,
        quantity: el.number
      }
    )});

  const checkoutOptions = {
    lineItems: [...item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cart`
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
  };

  async function putCart(id, index) {
    console.log('put request', state[index])
    let newQuantity = {
        product: state[index].product.id,
        user: user.id,
        number: state[index].number += 1,
        product_id: state[index].product.id,
        user_id: user.id,
    }
    await axios
    .put(`http://127.0.0.1:8000/cart/${id}/`,newQuantity, {
            headers: {
                Authorization: "Bearer " + token,
            },
            
        });
    await axios
      .get(`http://127.0.0.1:8000/cart/?user_id=${user.id}`, {
              headers: {
                  Authorization: "Bearer " + token,
              },
          })
      .then((response) => setTest(response.data))
      .catch((error) => console.error(error));
    
}
  return (
    <div className="checkout">
      {console.log("Users cart: ", state)}
      <h1>Cart for {user.username}</h1>
      <div className="checkout-price">
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Price</th>
              <th>Item Image</th>
            </tr>
          </thead>
          <tbody>
            {state.map((el,index) => {
              return(
                <tr key={index}>
                <td>{el.number}</td>
                <td>{el.product.price}</td>
                <td><img
                  className="checkout-product-image"
                  src={el.product.image}
                  alt="Product"
                  height= '300'
                /></td>
                <td><button onClick={() => putCart(el.id, index)}>Add Another one</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <button className="checkout-button" onClick={redirectToCheckout}>
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">Buy</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
