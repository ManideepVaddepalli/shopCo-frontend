import localFont from "next/font/local";
import "./entireproducts.css";
import Card from "./Card";

const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});
const integralCFBold = localFont({
  src: "../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
export default function EntireProduct({ props, name }) {
  if (!props) {
    return (
      <div className={`${satoshi.className} search-all-products-container`}>
        <div className="search-all-products-heading">
          <h4>
            Search Results for : <span>{name}</span>
          </h4>
          <p>Showing 0 items</p>
        </div>
        <div className="total-search-products-cards-container">
          No Products Found...
        </div>
      </div>
    );
  }
  const cardElemets = props.map((elem) => {
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
  if (cardElemets == []) {
    return (
      <div className={`${satoshi.className} search-all-products-container`}>
        <div className="search-all-products-heading">
          <h4>
            Search Results for : <span>{name}</span>
          </h4>
          <p>Showing 0 items</p>
        </div>
        <div className="total-search-products-cards-container">
          No Products Found...
        </div>
      </div>
    );
  }
  return (
    <div className={`${satoshi.className} search-all-products-container`}>
      <div className="search-all-products-heading">
        <h4>
          Search Results for : <span>{name}</span>
        </h4>
        <p>Showing {props.length} items</p>
      </div>
      <div className="total-search-products-cards-container">
        {cardElemets ? cardElemets : "No Products Found..."}
      </div>
    </div>
  );
}
