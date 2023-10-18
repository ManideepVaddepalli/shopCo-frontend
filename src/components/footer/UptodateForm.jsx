"use client";
import localFont from "next/font/local";
import React from "react";
const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});

export default function UptodateForn() {
  let [email, setEmail] = React.useState("");
  let [done, setDone] = React.useState(false);
  function emailSubmit(e) {
    e.preventDefault();
    let inputField = document.querySelector(".black-section form input");
    let tempEmail = email.trim();
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regexEmail.test(tempEmail)) {
      inputField.style.border = "0px";
      inputField.style.color = "black";
      setTimeout(() => {
        setDone(true);
      }, 500);
      setTimeout(() => {
        setDone(false);
      }, 10000);
    } else {
      inputField.style.border = "1px solid #DC143C";
      inputField.style.color = "#DC143C";
    }
  }
  return (
    <form onSubmit={emailSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={satoshi.className}
        type="email"
        placeholder="Enter your email address"
      ></input>
      {!done && (
        <button className={satoshi.className} type="submit">
          Subscribe to Newsletter
        </button>
      )}
      {done && (
        <button disabled className={satoshi.className} type="submit">
          Done
        </button>
      )}
    </form>
  );
}
