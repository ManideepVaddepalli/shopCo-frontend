"use client";
import React from "react";
import "./writereview.css";
import localFont from "next/font/local";
import { useAuthContext } from "@/hooks/useAuthContext";

const integralCFBold = localFont({
  src: "../../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
const satoshi = localFont({
  src: "../../../fonts/Satoshi-Bold.otf",
  src: "../../../fonts/Satoshi-Medium.otf",
  src: "../../../fonts/Satoshi-Regular.otf",
});
export default function WriteReview({ setShow, productId }) {
  const { state, setState } = useAuthContext();
  const fullStar = (
    <svg
      className="write-review-star"
      width="34"
      height="32"
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9448 22.9296C17.1023 22.836 17.2985 22.8362 17.4559 22.93L23.0722 26.2767L23.0724 26.2767C23.7374 26.6733 24.5111 26.0801 24.3461 25.3811L22.8575 19.088C22.8144 18.9055 22.8769 18.7143 23.0194 18.5926L27.9862 14.3526L27.9864 14.3524C28.5462 13.8749 28.2572 12.9573 27.5004 12.898L27.4977 12.8978L20.9612 12.3511C20.7771 12.3357 20.6165 12.2201 20.5435 12.0504L17.9857 6.10375L17.985 6.10217C17.6976 5.42753 16.7023 5.42753 16.4149 6.10217L16.414 6.10413L13.8562 12.0375C13.7832 12.2069 13.6227 12.3224 13.4388 12.3378L6.90216 12.8845L6.89955 12.8847L6.89955 12.8847C6.14275 12.944 5.8537 13.8616 6.41355 14.3391L6.41372 14.3392L11.3805 18.5792C11.523 18.701 11.5855 18.8922 11.5424 19.0746L10.0538 25.3677L16.9448 22.9296ZM16.9448 22.9296L11.3284 26.2629L11.3275 26.2634M16.9448 22.9296L11.3275 26.2634M11.3275 26.2634C10.6626 26.6599 9.88894 26.0669 10.0537 25.368L11.3275 26.2634Z"
        fill="#E5B80B"
        stroke="#E5B80B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
  const halfStar = (
    <svg
      className="write-review-star"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1799 5.74785C16.0591 5.83193 15.9595 5.95046 15.8948 6.10217L15.894 6.10413L13.3362 12.0375C13.2631 12.2069 13.1026 12.3224 12.9187 12.3378L6.38211 12.8845L6.3795 12.8847L6.3795 12.8847C5.6227 12.944 5.33365 13.8616 5.8935 14.3391L5.89367 14.3392L10.8604 18.5792C11.003 18.701 11.0655 18.8922 11.0223 19.0746L9.53373 25.3677L16.1799 5.74785ZM16.1799 5.74785V23.0748L10.8084 26.2629L10.8075 26.2634C10.1426 26.6599 9.36889 26.0669 9.53368 25.368L16.1799 5.74785Z"
        fill="#FFBA79"
        stroke="#E5B80B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M16.3737 22.8436C16.5628 22.7313 16.7981 22.7315 16.987 22.8441L22.6034 26.1908L22.6035 26.1909C23.1957 26.544 23.8724 26.0137 23.7288 25.4043L16.3737 22.8436ZM16.3737 22.8436L10.7573 26.1769L10.7563 26.1775C10.1641 26.5307 9.48738 26.0004 9.63099 25.391C9.631 25.3909 9.63101 25.3909 9.63102 25.3909C9.63103 25.3908 9.63104 25.3908 9.63106 25.3907L11.1197 19.0976C11.1714 18.8787 11.0964 18.6492 10.9253 18.5032L5.9586 14.2632L5.95839 14.263C5.46792 13.8447 5.71734 13.0369 6.38731 12.9844L6.38732 12.9844L6.39044 12.9841L12.927 12.4374C13.1477 12.419 13.3403 12.2804 13.428 12.077L15.9858 6.14372L15.9868 6.14137C16.2397 5.5478 17.1201 5.5478 17.373 6.14137L17.3738 6.14327L19.9316 12.0899C20.0192 12.2936 20.2119 12.4323 20.4328 12.4508L26.9694 12.9974L26.9725 12.9977C27.6425 13.0502 27.8919 13.858 27.4014 14.2763L27.4012 14.2765L22.4345 18.5165C22.2634 18.6626 22.1884 18.8921 22.2401 19.111L23.7288 25.404L16.3737 22.8436Z"
        stroke="#E5B80B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
  const emptyStar = (
    <svg
      className="write-review-star"
      width="34"
      height="32"
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8537 22.8436C17.0428 22.7313 17.2781 22.7315 17.467 22.8441L23.0834 26.1908L23.0835 26.1909C23.6757 26.544 24.3524 26.0137 24.2088 25.4043L16.8537 22.8436ZM16.8537 22.8436L11.2373 26.1769L11.2363 26.1775C10.6441 26.5307 9.96739 26.0004 10.111 25.391C10.111 25.3909 10.111 25.3909 10.111 25.3909C10.111 25.3908 10.1111 25.3908 10.1111 25.3907L11.5997 19.0976C11.6514 18.8787 11.5764 18.6492 11.4053 18.5032L6.43861 14.2632L6.4384 14.263C5.94793 13.8447 6.19735 13.0369 6.86733 12.9844L6.86733 12.9844L6.87045 12.9841L13.4071 12.4374C13.6278 12.419 13.8204 12.2804 13.908 12.077L16.4658 6.14372L16.4668 6.14137C16.7197 5.5478 17.6001 5.5478 17.853 6.14137L17.8538 6.14327L20.4116 12.0899C20.4992 12.2936 20.6919 12.4323 20.9128 12.4508L27.4494 12.9974L27.4525 12.9977C28.1225 13.0502 28.3719 13.858 27.8814 14.2763L27.8812 14.2765L22.9145 18.5165C22.7434 18.6626 22.6684 18.8921 22.7202 19.111L24.2088 25.404L16.8537 22.8436Z"
        stroke="#E5B80B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
  function ratingStars(rating) {
    if (rating >= 0 && rating < 0.5) {
      return (
        <>
          {emptyStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 0.5 && rating < 1) {
      return (
        <>
          {halfStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 1 && rating < 1.5) {
      return (
        <>
          {fullStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 1.5 && rating < 2) {
      return (
        <>
          {fullStar}
          {halfStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 2 && rating < 2.5) {
      return (
        <>
          {fullStar}
          {fullStar}
          {emptyStar}
          {emptyStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 2.5 && rating < 3) {
      return (
        <>
          {fullStar}
          {fullStar}
          {halfStar}
          {emptyStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 3 && rating < 3.5) {
      return (
        <>
          {fullStar}
          {fullStar}
          {fullStar}
          {emptyStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 3.5 && rating < 4) {
      return (
        <>
          {fullStar}
          {fullStar}
          {fullStar}
          {halfStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 4 && rating < 4.5) {
      return (
        <>
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
          {emptyStar}
        </>
      );
    } else if (rating >= 4.5 && rating < 5) {
      return (
        <>
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
          {halfStar}
        </>
      );
    } else if (rating == 5) {
      return (
        <>
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
        </>
      );
    }
  }
  let [stars, setStars] = React.useState(
    <>
      {fullStar}
      {fullStar}
      {fullStar}
      {fullStar}
      {fullStar}
    </>
  );
  let [textarea, setTextarea] = React.useState("");
  let [rating, setRating] = React.useState(5);
  let [error, setError] = React.useState(false);
  const handleRatingChange = (e) => {
    if (e.target.value < 0) {
      return;
    }
    if (e.target.value > 5) {
      return;
    }
    setRating(Number(Number(e.target.value).toFixed(1)));
    setStars(ratingStars(e.target.value));
  };
  const handleSubmit = async () => {
    const URI =
      "https://shop-co-backend-server.vercel.app/api/auth/product/writeReview";
    // const URI = "http://localhost:4000/api/auth/product/writeReview";
    const token = state.token;
    let postedDate = new Date();
    const res = await fetch(URI, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
        reviewName: state.user.name,
        rating,
        reviewDesc: textarea,
        postedOn: postedDate,
      }),
    });
    if (!res.ok) {
      setError(false);
      return;
    }
    window.location.reload(true);
  };
  return (
    <div className="write-product-review-conatiner">
      <div className="card-write-review">
        <h3 className={integralCFBold.className}>Write a Product Review</h3>
        <div className="select-stars-container-write-review">
          <div className="stars-container-write-review">{stars}</div>
          <input
            className={satoshi.className}
            type="number"
            min="0"
            max="5"
            value={rating}
            step="0.1"
            onChange={handleRatingChange}
          ></input>
        </div>
        {!rating && (
          <p className="write-review-rating-required">Rating is required</p>
        )}
        <textarea
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
          className={`${satoshi.className} write-review-textarea`}
          placeholder="Write the Product Review"
        ></textarea>
        <div className="write-review-buttons-container">
          <button
            className={`${satoshi.className} close-button-write-review`}
            type="button"
            onClick={() => setShow(false)}
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className={`${satoshi.className} submit-button-write-review`}
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
