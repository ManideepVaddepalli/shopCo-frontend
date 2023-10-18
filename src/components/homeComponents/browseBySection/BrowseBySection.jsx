import "./browsebysection.css";
import localFont from "next/font/local";
import Link from "next/link";

const integralCFBold = localFont({
  src: "../../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
const satoshi = localFont({
  src: "../../../fonts/Satoshi-Bold.otf",
  src: "../../../fonts/Satoshi-Medium.otf",
  src: "../../../fonts/Satoshi-Regular.otf",
});

export default function BrowseBySection() {
  return (
    <div className="browse-by-section-container">
      <h1 className={integralCFBold.className}>Browse by dress style</h1>
      <div className={`${satoshi.className} items-container`}>
        <div className="first-conatiner">
          <Link
            href="/shop?dressStyle=casual"
            className="casual-container common-type"
          >
            <p>Casual</p>
          </Link>
          <Link
            href="/shop?dressStyle=formal"
            className="formal-container common-type"
          >
            <p>Formal</p>
          </Link>
        </div>
        <div className="second-conatiner">
          <Link
            href="/shop?dressStyle=party"
            className="party-container common-type"
          >
            <p>Party</p>
          </Link>
          <Link
            href="/shop?dressStyle=gym"
            className="gym-container common-type"
          >
            <p>Gym</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
