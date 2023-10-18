import "./byRating.css";
import localFont from "next/font/local";
import Card from "./Card";
import Link from "next/link";

const integralCFBold = localFont({
  src: "../../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
const satoshi = localFont({
  src: "../../../fonts/Satoshi-Bold.otf",
  src: "../../../fonts/Satoshi-Medium.otf",
  src: "../../../fonts/Satoshi-Regular.otf",
});
export default async function ByRating() {
  const getNewArrivals = async () => {
    const URI =
      "https://shop-co-backend-server.vercel.app/api/product/byRatingProducts";
    // const URI = "http://localhost:4000/api/product/byRatingProducts";
    const response = await fetch(URI, {
      next: { revalidate: 1 },
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const newArrivals = await response.json();
    return newArrivals;
  };
  const { products } = await getNewArrivals();
  const cardElemets = products.map((elem) => {
    return (
      <Card
        key={elem._id}
        id={elem._id}
        avgRating={elem.avgRating}
        name={elem.name}
        actualPrice={elem.actualPrice}
        discountPrice={elem.discountPrice}
        discount={elem.discount}
        displayImage={elem.displayImage}
      />
    );
  });
  return (
    <div className="total-new-arrivals-container">
      <h1 className={integralCFBold.className}>Top Rated</h1>
      <div className="cards-container">{cardElemets}</div>
      <Link className={satoshi.className} href="/shop?sort=highRating">
        View More
      </Link>
    </div>
  );
}
