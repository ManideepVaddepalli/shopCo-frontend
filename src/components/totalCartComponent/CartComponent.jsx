import TotalCartCardItems from "./totalCartCardItems/TotalCartCardItems";
import BillSection from "./BillSection/BillSection";
import "./cartcomponent.css";
import localFont from "next/font/local";
const integralCFBold = localFont({
  src: "../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});

export default function CartComponent() {
  return (
    <div className={`${satoshi.className} total-cart-component`}>
      <h1 className={integralCFBold.className}>Your Cart</h1>
      <div className="cards-bill-cart-container">
        <TotalCartCardItems />
        <BillSection />
      </div>
    </div>
  );
}
