"use client";

import "./reviewssection.css";
import ReviewCards from "./ReviewCards";
import React from "react";
import localFont from "next/font/local";
import { useAuthContext } from "@/hooks/useAuthContext";
import WriteReview from "./WriteReview";

const satoshi = localFont({
  src: "../../../fonts/Satoshi-Bold.otf",
  src: "../../../fonts/Satoshi-Medium.otf",
  src: "../../../fonts/Satoshi-Regular.otf",
});

export default function ReviewsSection({ props, productId }) {
  const { state, setState } = useAuthContext();
  let [logged, setLogged] = React.useState(true);
  let [show, setShow] = React.useState(false);
  let [dropdown, setDropdown] = React.useState("latest");
  function handleDropdown(e) {
    setDropdown(e.target.value);
    setArray(orderByDate(props, dropdown));
  }
  function orderByDate(array, value) {
    switch (value) {
      case "latest":
        return array.sort(
          (item1, item2) => new Date(item2.postedOn) - new Date(item1.postedOn)
        );
      case "old":
        return array.sort(
          (item1, item2) => new Date(item1.postedOn) - new Date(item2.postedOn)
        );
      case "ratelow":
        return array.sort(
          (item1, item2) => new Date(item1.rating) - new Date(item2.rating)
        );
      case "ratehigh":
        return array.sort(
          (item1, item2) => new Date(item2.rating) - new Date(item1.rating)
        );
      default:
        return props;
    }
  }
  const handleWriteReview = () => {
    if (!state.user) {
      setLogged(false);
      setInterval(() => {
        setLogged(true);
      }, 3000);
      return;
    }
    console.log("passed");
    setShow(true);
  };
  let [array, setArray] = React.useState(orderByDate(props, dropdown));
  return (
    <div className={`${satoshi.className} total-product-review-container`}>
      <div className="heading-container-review-product">
        <h3>
          All reviews <span>({props.length})</span>
        </h3>
        <div className="heading-right-container-review-product">
          <div className="filter-png-container-review-product"></div>
          <select
            value={dropdown}
            onChange={handleDropdown}
            className={`${satoshi.className} filter-dropdown-review-product`}
            name="review-filter"
          >
            <option
              className={`${satoshi.className} common-dropdown-review-product`}
              value="latest"
            >
              Latest
            </option>
            <option
              className={`${satoshi.className} common-dropdown-review-product`}
              value="old"
            >
              Oldest
            </option>
            <option
              className={`${satoshi.className} common-dropdown-review-product`}
              value="ratelow"
            >
              Low Rating
            </option>
            <option
              className={`${satoshi.className} common-dropdown-review-product`}
              value="ratehigh"
            >
              High Rating
            </option>
          </select>
          <button
            onClick={handleWriteReview}
            className={satoshi.className}
            type="button"
          >
            Write a Review
          </button>
        </div>
      </div>
      {show && <WriteReview setShow={setShow} productId={productId} />}
      {!logged && <p className="error-review-product">Must be logged in.</p>}
      <div className="total-reviews-container-product">
        <ReviewCards props={array} />
      </div>
    </div>
  );
}
