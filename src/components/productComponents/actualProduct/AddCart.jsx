"use client";
import React from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../../../fonts/Satoshi-Bold.otf",
  src: "../../../fonts/Satoshi-Medium.otf",
  src: "../../../fonts/Satoshi-Regular.otf",
});
const integralCFBold = localFont({
  src: "../../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
export default function AddCart(props) {
  const { state, setState } = useAuthContext();
  const [selectsize, setSelectsize] = React.useState(true);
  const [login, setLogin] = React.useState(true);
  const [amount, setAmount] = React.useState(1);
  const addClicked = async () => {
    setLogin(true);
    if (!state.user) {
      setLogin(false);
      setTimeout(() => {
        setLogin(true);
      }, 5000);
      return;
    }
    let sizesInputs = document.querySelectorAll(".common-input-size-product");
    let sizes = "";
    sizesInputs.forEach((elem) => {
      if (elem.checked) {
        sizes = elem.value;
      }
    });
    if (sizes == false) {
      setSelectsize(false);
      setTimeout(() => {
        setSelectsize(true);
      }, 5000);
      return;
    }
    console.log(props.colors);
    const URI =
      "https://shop-co-backend-server.vercel.app/api/auth/user/addItem";
    // const URI = "http://localhost:4000/api/auth/user/addItem";
    const res = await fetch(URI, {
      method: "POST",
      headers: {
        authorization: `Bearer ${state.token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: state.user._id,
        productId: props.id,
        productName: props.name,
        price: props.discountPrice,
        colors: props.colors,
        image: props.displayImage,
        productQuantity: amount,
        productSize: sizes,
      }),
    });
    const user = await res.json();
    if (res.ok) {
      setState({ user, token: state.token });
    }
    if (!res.ok) {
      console.log(user);
    }
  };
  return (
    <>
      <div className="total-add-to-card-product">
        <div className="product-amount-comtainer">
          <button
            className={`${satoshi.className} minus-button-product`}
            onClick={() =>
              setAmount((prevElem) => {
                if (prevElem <= 1) {
                  return prevElem;
                } else {
                  return prevElem - 1;
                }
              })
            }
            type="button"
          >
            <span className="first-span-minus-product"></span>
          </button>
          <p className={satoshi.className}>{amount}</p>
          <button
            className={`${satoshi.className} plus-button-product`}
            onClick={() => setAmount((prevElem) => prevElem + 1)}
            type="button"
          >
            <span className="first-span-plus-product"></span>
            <span className="second-span-plus-product"></span>
          </button>
        </div>
        <button
          className={`${satoshi.className} cart-button-product`}
          onClick={addClicked}
          type="button"
        >
          Add to Cart
        </button>
      </div>
      {login ? <></> : <p className="alert-login-product">Must be Logged in</p>}
      {login ? (
        selectsize ? (
          <></>
        ) : (
          <p className="alert-login-product">Select Size</p>
        )
      ) : (
        <></>
      )}
    </>
  );
}
