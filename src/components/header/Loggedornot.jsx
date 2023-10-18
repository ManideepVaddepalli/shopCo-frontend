"use client";
import { useAuthContext } from "@/hooks/useAuthContext";
import Link from "next/link";
import localFont from "next/font/local";
import UserName from "./UserName";

const satoshiRegular = localFont({
  src: "../../fonts/Satoshi-Regular.otf",
});

export default function Loggedornot() {
  let { state, setState } = useAuthContext();
  return (
    <>
      {state.user && (
        <>
          <div className="cart-container">
            <Link href="/cart"></Link>
          </div>
          <div className="user-container">
            <button type="button"></button>
          </div>
          <input className="user-input-checkbox" type="checkbox"></input>
          <UserName />
        </>
      )}
      {!state.user && (
        <>
          <div className={`${satoshiRegular.className} login-container`}>
            <Link href="/login" type="button">
              Login
            </Link>
          </div>
          <div className={`${satoshiRegular.className} signup-container`}>
            <Link href="/signup" type="button">
              Signup
            </Link>
          </div>
        </>
      )}
    </>
  );
}
