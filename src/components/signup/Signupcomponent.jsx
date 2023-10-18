import "./signupcomponent.css";
import localFont from "next/font/local";
import Formsignup from "./Formsignup";
import Link from "next/link";

const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});
const integralCFBold = localFont({
  src: "../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
export default function Signupcomponent() {
  return (
    <div className="total-login-component-signup">
      <div className="image-container-bg-signup"></div>
      <div className="bottom-container-signup">
        <h1 className={integralCFBold.className}>shop.co</h1>
        <div className="center-container-signup">
          <h2 className={satoshi.className}>Create Account</h2>
          <Formsignup />
        </div>
        <p className={satoshi.className}>
          Old User? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
