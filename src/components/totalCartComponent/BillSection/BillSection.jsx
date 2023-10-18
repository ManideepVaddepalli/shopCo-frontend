"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import "./billsection.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../../../fonts/Satoshi-Regular.otf",
});
export default function BillSection() {
  const deliveryFee = 30;
  const { state, setState } = useAuthContext();
  const [array, setArray] = useState([...state.user.cart]);
  useEffect(() => {
    setArray([...state.user.cart]);
  }, [state]);
  if (!state.user) {
    return;
  }
  function getSubTotal(cartArray) {
    const sub = cartArray.map((elem) => {
      return elem.sizeQuantity.map((item) => {
        return item.quantity * elem.price;
      });
    });
    let subtotalArray = sub.map((elem) => {
      return elem.reduce((d, t) => d + t, 0);
    });
    let subtotal = subtotalArray.reduce((d, t) => d + t, 0);
    return subtotal;
  }
  let subtotal = getSubTotal(array);
  return (
    <div className="total-bill-section-cart-container">
      <h3>Order Summary</h3>
      <div className="subtotal-bill-section-cart">
        <p>Subtotal</p>
        <h5>₹.{subtotal}</h5>
      </div>
      <div className="deliveryfee-bill-section-cart">
        <p>Delivery Fee</p>
        <h5>₹.{deliveryFee}</h5>
      </div>
      <div className="total-bill-section-cart">
        <p>Total</p>
        <h5>₹.{subtotal + deliveryFee}</h5>
      </div>
      <button
        className={`${satoshi.className} checkout-cart-bill-section`}
        type="button"
      >
        Go to Checkout{" "}
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7959 0.454104L18.5459 7.2041C18.6508 7.30862 18.734 7.43281 18.7908 7.56956C18.8476 7.7063 18.8768 7.85291 18.8768 8.00098C18.8768 8.14904 18.8476 8.29565 18.7908 8.4324C18.734 8.56915 18.6508 8.69334 18.5459 8.79785L11.7959 15.5479C11.5846 15.7592 11.2979 15.8779 10.9991 15.8779C10.7002 15.8779 10.4135 15.7592 10.2022 15.5479C9.99084 15.3365 9.87211 15.0499 9.87211 14.751C9.87211 14.4521 9.99084 14.1654 10.2022 13.9541L15.0313 9.12504L1.25 9.12504C0.951632 9.12504 0.665483 9.00651 0.454505 8.79554C0.243527 8.58456 0.125 8.29841 0.125 8.00004C0.125 7.70167 0.243527 7.41552 0.454505 7.20455C0.665483 6.99357 0.951632 6.87504 1.25 6.87504L15.0313 6.87504L10.2013 2.04598C9.98991 1.83464 9.87117 1.54799 9.87117 1.2491C9.87117 0.950218 9.98991 0.663574 10.2013 0.45223C10.4126 0.240885 10.6992 0.122151 10.9981 0.122151C11.297 0.122151 11.5837 0.240885 11.795 0.45223L11.7959 0.454104Z"
            fill="white"
          />
        </svg>
        <span></span>
      </button>
    </div>
  );
}
