import "./logincomponent.css";
import localFont from "next/font/local";
import Formlogin from "./Formlogin";
import Link from "next/link";

const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});
const integralCFBold = localFont({
  src: "../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
export default function Logincomponent() {
  return (
    <div className="total-login-component">
      <div className="image-container-bg-login"></div>
      <div className="bottom-container-login">
        <h1 className={integralCFBold.className}>shop.co</h1>
        <div className="center-container-login">
          <h2 className={satoshi.className}>Login</h2>
          <Formlogin />
        </div>
        <p className={satoshi.className}>
          New to <span className={integralCFBold.className}>SHOP.CO</span>?{" "}
          <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
