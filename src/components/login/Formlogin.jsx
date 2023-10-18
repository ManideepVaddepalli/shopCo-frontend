"use client";
import React from "react";
import localFont from "next/font/local";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useRouter } from "next/navigation";

const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});

export default function Formlogin() {
  const router = useRouter();
  let { setState } = useAuthContext();
  let URI = "https://shop-co-backend-server.vercel.app/api";
  // let URI = "http://localhost:4000/api";
  let [email, setEmail] = React.useState("");
  let [pass, setPass] = React.useState("");
  let [Error, setError] = React.useState({
    email: "",
    pass: "",
  });
  let [loading, setLoading] = React.useState(false);
  function setNamered(num) {
    let nameInput = document.querySelectorAll(
      ".center-container-login form input"
    );
    nameInput[num].style.border = "1px solid #DC143C";
    nameInput[num].style.color = "#DC143C";
  }
  function setAllblack() {
    let nameInput = document.querySelectorAll(
      ".center-container-login form input"
    );
    nameInput.forEach((elem) => {
      elem.style.border = "1px solid black";
      elem.style.color = "black";
    });
  }
  async function formSubmit(e) {
    e.preventDefault();
    setAllblack();
    setError({
      email: "",
      pass: "",
    });
    if (!email) {
      setError((prevElem) => {
        return {
          ...prevElem,
          email: "Can't be empty",
        };
      });
      setNamered(0);
      return;
    }
    if (!pass) {
      setError((prevElem) => {
        return {
          ...prevElem,
          pass: "Can't be empty",
        };
      });
      setNamered(1);
      return;
    }
    setLoading(true);
    const response = await fetch(URI + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: pass }),
    });
    const msg = await response.json();
    if (msg?.error === "1") {
      setError((prev) => {
        return {
          ...prev,
          email: "Email not Registered",
        };
      });
      setLoading(false);
      setNamered(0);
      return;
    }
    if (msg?.error === "2") {
      setError((prev) => {
        return {
          ...prev,
          pass: "Incorrect Password",
        };
      });
      setLoading(false);
      setNamered(1);
      return;
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(msg.user));
      localStorage.setItem("token", JSON.stringify(msg.token));
      setState({ user: msg.user, token: msg.token });
      setLoading(false);
      router.push("/");
    }
  }
  return (
    <form className={satoshi.className} onSubmit={formSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      ></input>
      {Error.email && <p className="error-para-login">{Error.email}</p>}
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="Password"
      ></input>
      {Error.pass && <p className="error-para-login">{Error.pass}</p>}
      <button className={satoshi.className} type="submit" disabled={loading}>
        {loading ? "Loading" : "Login"}
      </button>
    </form>
  );
}
