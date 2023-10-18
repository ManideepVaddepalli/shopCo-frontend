"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: null,
  });
  useEffect(() => {
    (async function () {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
          return;
        }
        const URI = "https://shop-co-backend-server.vercel.app/api/auth/check";
        // const URI = "http://localhost:4000/api/auth/check";
        const res = await fetch(URI, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        });
        const user = await res.json();
        if (!res.ok) {
          setState({ user: null, token: null });
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          return;
        }
        setState({ user: { ...user }, token });
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  console.log("AuthContext State: ", state);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};
