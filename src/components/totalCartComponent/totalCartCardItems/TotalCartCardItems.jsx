"use client";
import "./totalcartcarditems.css";
import { useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
export default function TotalCartCardItems() {
  const { state, setState } = useAuthContext();
  let [User, setUser] = useState(state.user.cart);
  if (!state.user) {
    return <h3 className="error-no-user-cart">Login to View Your Cart</h3>;
  }
  async function handleDeleteProduct(e) {
    let name = e.target.name.split("%");
    const token = state.token;
    const userId = state.user._id;
    const productId = name[0];
    const productSize = name[1];
    const URI =
      "https://shop-co-backend-server.vercel.app/api/auth/user/removeItem";
    // const URI = "http://localhost:4000/api/auth/user/removeItem";
    const res = await fetch(URI, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId,
        productId,
        productSize,
      }),
    });
    const { user } = await res.json();
    if (res.ok) {
      setState({ user, token });
      setUser(user.cart);
    }
  }
  function elements(variable) {
    const elements = variable.map((elem) => {
      return elem.sizeQuantity.map((item) => {
        return (
          <div
            key={`${elem.productId}%${item.size}`}
            className="individual-card-cart-product"
          >
            <div className="image-component-container-card-cart">
              <div
                className="product-image-card-cart"
                style={{ backgroundImage: `url(${elem.image})` }}
              ></div>
            </div>
            <div className="text-component-container-card-cart">
              <div className="card-cart-heading-container">
                <h5>{elem.productName}</h5>
                <button
                  name={`${elem.productId}%${item.size}`}
                  type="button"
                  onClick={handleDeleteProduct}
                ></button>
              </div>
              <p className="card-cart-size">
                Size: <span>{item.size}</span>
              </p>
              <p className="card-cart-color">
                Color: <span>{elem.colors.join()}</span>
              </p>
              <div className="price-quanity-container-card-cart">
                <h3>₹.{elem.price * item.quantity}</h3>
                <p>
                  Qty:
                  <span>
                    {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      });
    });
    return elements;
  }
  let elementsCard = elements(User);

  return (
    <div className="total-cart-items-container">
      {User.length == 0 ? <h3>Your Cart is Empty</h3> : elementsCard}
    </div>
  );
}
