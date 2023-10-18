"use client";
import React from "react";
import localFont from "next/font/local";
import validator from "validator";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});
const integralCFBold = localFont({
  src: "../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});

export default function Formsignup() {
  const router = useRouter();
  let { state, setState } = useAuthContext();
  let [loading, setLoading] = React.useState(false);
  let URI = "https://shop-co-backend-server.vercel.app/api";
  // let URI = "http://localhost:4000/api";
  let [name, setName] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [pass, setPass] = React.useState("");
  let [passcheck, setPasscheck] = React.useState("");
  let [Error, setError] = React.useState({
    name: "",
    email: "",
    pass: "",
    passcheck: "",
  });
  function setNamered(num) {
    let nameInput = document.querySelectorAll(
      ".center-container-signup form input"
    );
    nameInput[num].style.border = "1px solid #DC143C";
    nameInput[num].style.color = "#DC143C";
  }
  function setAllblack() {
    let nameInput = document.querySelectorAll(
      ".center-container-signup form input"
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
      name: "",
      email: "",
      pass: "",
      passcheck: "",
    });
    if (!name) {
      setError((prevElem) => {
        return {
          ...prevElem,
          name: "Can't be empty",
        };
      });
      setNamered(0);
      return;
    }
    if (!email) {
      setError((prevElem) => {
        return {
          ...prevElem,
          email: "Can't be empty",
        };
      });
      setNamered(1);
      return;
    }
    if (!pass) {
      setError((prevElem) => {
        return {
          ...prevElem,
          pass: "Can't be empty",
        };
      });
      setNamered(2);
      return;
    }
    if (!passcheck) {
      setError((prevElem) => {
        return {
          ...prevElem,
          passcheck: "Can't be empty",
        };
      });
      setNamered(3);
      return;
    }
    if (!validator.isEmail(email)) {
      setError((prevElem) => {
        return {
          ...prevElem,
          email: "Enter valid email",
        };
      });
      setNamered(1);
      return;
    }
    if (!validator.isStrongPassword(pass)) {
      setError((prevElem) => {
        return {
          ...prevElem,
          pass: "Password not strong enough",
        };
      });
      setNamered(2);
      return;
    }
    if (pass !== passcheck) {
      setError((prevElem) => {
        return {
          ...prevElem,
          passcheck: "Password mismatch",
        };
      });
      setNamered(3);
      return;
    }
    setLoading(true);
    const response = await fetch(URI + "/signup", {
      next: { revalidate: 1 },
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password: pass,
      }),
    });
    const msg = await response.json();
    if (msg?.error === "1") {
      setError((prevElem) => {
        return {
          ...prevElem,
          email: "Email already registered",
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
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      ></input>
      {Error.name && <p className="error-para-signup">{Error.name}</p>}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      ></input>
      {Error.email && <p className="error-para-signup">{Error.email}</p>}
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="Create Password"
      ></input>
      {Error.pass && <p className="error-para-signup">{Error.pass}</p>}
      <input
        value={passcheck}
        onChange={(e) => setPasscheck(e.target.value)}
        type="password"
        placeholder="Confirm Password"
      ></input>
      {Error.passcheck && (
        <p className="error-para-signup">{Error.passcheck}</p>
      )}
      <button className={satoshi.className} type="submit" disabled={loading}>
        {loading ? "Loading" : "Continue"}
      </button>
      <p className="terms-conditions-signup">
        By signing up,I have read and agree to Terms and Privacy Policy
      </p>
    </form>
  );
}
