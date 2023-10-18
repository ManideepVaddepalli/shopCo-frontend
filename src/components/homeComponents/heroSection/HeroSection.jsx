import localFont from "next/font/local";
import "./herosection.css";
import Link from "next/link";
const integralCFBold = localFont({
  src: "../../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
const satoshi = localFont({
  src: "../../../fonts/Satoshi-Bold.otf",
  src: "../../../fonts/Satoshi-Medium.otf",
  src: "../../../fonts/Satoshi-Regular.otf",
});

export default function HeroSection() {
  return (
    <div className="total-hero-section-container">
      <div className="text-content-container">
        <div className="text-to-button-section">
          <h1 className={integralCFBold.className}>
            Find clothes that matches your style
          </h1>
          <p className={satoshi.className}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className={`${satoshi.className} shop-now-container`}>
            <Link href="/shop">Shop Now</Link>
          </div>
        </div>
        <div className={`${satoshi.className} stats-conatiner`}>
          <div className="two-stats-container">
            <div className="common-stat">
              <h3>200+</h3>
              <p>International Brands</p>
            </div>
            <div className="common-stat">
              <h3>2,000+</h3>
              <p>High-Quality Products</p>
            </div>
          </div>
          <div className="single-stat-container">
            <div className="common-stat">
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-content-container"></div>
    </div>
  );
}
