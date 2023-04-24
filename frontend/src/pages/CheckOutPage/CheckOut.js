import { loadStripe } from "@stripe/stripe-js";
import CardIcon from "../../images/credit-card.svg";
import React from 'react';
import useAuth from "../../hooks/useAuth";

//This is what we will use to grab the data being passed over
import { useLocation } from "react-router-dom";

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
  console.log('checkout item', ...state);
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
  return (
    <div className="checkout">
      {console.log("Users cart: ", state)}
      <h1>Cart for {user.username}</h1>
      <div className="checkout-price">
        {state.map(el => {
          return(
            <><ul>{el.number}@
            {el.product.price}
            <img
              className="checkout-product-image"
              src={el.product.image}
              alt="Product"
              width='30'
              height='200'
            /></ul></>
          )
        })}
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
