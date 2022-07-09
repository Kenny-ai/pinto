import React, { useEffect, useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();
  
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret to allow us charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${parseInt(getBasketTotal(basket) * 100)}`
      });
      setClientSecret(response.data.clientSecret);
    }
  
    getClientSecret();
  }, [basket])

  console.log('THE SECRET IS >>>', clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      //paymentIntent = payment confirmation
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        });

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders')
    }).catch(error => console.log(error));
  }

  const [address, setAddress] = useState("");
  let [newAddress, setNewAddress] = useState("");

  const handleChange = (event) => {
    //Listen for changes in cardElement and dipslay any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    newAddress = setNewAddress(address);
  };


  return (
    <div className="payment">
      <div className="payment-container">

        <h1>
          Checkout (
            <Link to='/checkout'>
              {basket?.length} items
            </Link>)
        </h1>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <form onSubmit={handleAddressSubmit}>
              <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
              <button type="submit">Submit</button>
            </form>
            <p>{newAddress}</p>
            
            {/* <p>123 React Lane</p>
            <p>Los Angeles, CA</p> */}
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment-items">
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment method</h3>
          </div>
          <div className="payment-details">   
            {/* Stripe magic */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment-priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Payment;