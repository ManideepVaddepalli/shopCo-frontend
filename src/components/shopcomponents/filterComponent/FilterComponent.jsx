"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./filtercomponent.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../../../fonts/Satoshi-Bold.otf",
  src: "../../../fonts/Satoshi-Medium.otf",
  src: "../../../fonts/Satoshi-Regular.otf",
});
const integralCFBold = localFont({
  src: "../../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});

export default function FilterComponent({
  constraints,
  filterState,
  searchParams,
}) {
  const router = useRouter();
  const {
    colors: allColors,
    maxPrice,
    dressType: distinctDressType,
  } = constraints;
  const { mobileFilter, setMobileFilter } = filterState;
  const [price, setPrice] = useState(
    searchParams.maxPrice
      ? searchParams.maxPrice
      : Math.ceil(maxPrice / 100) * 100
  );
  function makeObjectFromArray(array) {
    let obj = array.map((elem) => {
      return { key: [elem], value: false };
    });
    obj = obj.reduce(
      (obj, item) => ({
        ...obj,
        [item.key]: item.value,
      }),
      {}
    );
    return obj;
  }
  let dressTypeObject = makeObjectFromArray(distinctDressType);
  const [inputSort, setInputSort] = useState(searchParams.sort);
  const [inputdressType, setInputdressType] = useState(
    searchParams.dressType
      ? {
          ...dressTypeObject,
          [searchParams.dressType]: true,
        }
      : { ...dressTypeObject }
  );
  function handleDressType(e) {
    setInputdressType((prevElem) => {
      return {
        ...dressTypeObject,
        [e.target.value]: !prevElem[e.target.value],
      };
    });
  }
  let colorsObject = makeObjectFromArray(allColors);
  const [inputColors, setInputColors] = useState(
    searchParams.color
      ? {
          ...colorsObject,
          [searchParams.color]: true,
        }
      : { ...colorsObject }
  );
  function handleColors(e) {
    setInputColors((prevELem) => {
      return {
        ...colorsObject,
        [e.target.value]: !prevELem[e.target.value],
      };
    });
  }
  function handleGender(e) {
    setInputGender((prevElem) => {
      return {
        male: false,
        female: false,
        [e.target.value]: !prevElem[e.target.value],
      };
    });
  }
  const [inputDressStyle, setInputDressStyle] = useState(
    searchParams.dressStyle
      ? {
          casual: false,
          formal: false,
          party: false,
          gym: false,
          [searchParams.dressStyle]: true,
        }
      : { casual: false, formal: false, party: false, gym: false }
  );
  const [inputGender, setInputGender] = useState(
    searchParams.gender
      ? {
          male: false,
          female: false,
          [searchParams.gender]: true,
        }
      : { male: false, female: false }
  );
  function handleDressStyle(e) {
    setInputDressStyle((prevElem) => {
      return {
        casual: false,
        formal: false,
        party: false,
        gym: false,
        [e.target.value]: !prevElem[e.target.value],
      };
    });
  }
  function trueObject(obj) {
    return Object.keys(obj).filter((entry) => obj[entry]);
  }
  function createPath(
    filterDressType,
    filterColor,
    filterDressStyle,
    filterGender,
    filterPrice,
    sort
  ) {
    return `/shop?dressType=${filterDressType}&color=${filterColor}&dressStyle=${filterDressStyle}&gender=${filterGender}&maxPrice=${filterPrice}&sort=${sort}`;
    // let path = [];
    // if (
    //   !filterColor &&
    //   !filterDressType &&
    //   !filterDressStyle &&
    //   !filterGender
    // ) {
    //   return "/shop";
    // }
    // if (filterColor && !filterDressType && !filterDressStyle && !filterGender) {
    //   return `/shop?color=${filterColor}`;
    // }
    // if (!filterColor && filterDressType && !filterDressStyle && !filterGender) {
    //   return `/shop?dressType=${filterDressType}`;
    // }
    // if (!filterColor && !filterDressType && filterDressStyle && !filterGender) {
    //   return `/shop?dressStyle=${filterDressStyle}`;
    // }
    // if (!filterColor && !filterDressType && !filterDressStyle && filterGender) {
    //   return `/shop?gender=${filterGender}`;
    // }
    // if (!filterColor && !filterDressType && !filterDressStyle && !filterGender) {
    //   return `/shop?gender=${filterGender}`;
    // }
  }
  function handleFilterApply() {
    const filterDressType = trueObject(inputdressType)[0]
      ? trueObject(inputdressType)[0]
      : "";
    const filterColor = trueObject(inputColors)[0]
      ? trueObject(inputColors)[0]
      : "";
    const filterDressStyle = trueObject(inputDressStyle)[0]
      ? trueObject(inputDressStyle)[0]
      : "";
    const filterGender = trueObject(inputGender)[0]
      ? trueObject(inputGender)[0]
      : "";
    const filterPrice = price ? price : "";
    const path = createPath(
      filterDressType,
      filterColor,
      filterDressStyle,
      filterGender,
      filterPrice,
      inputSort
    );
    setMobileFilter(false);
    router.push(path);
  }
  return (
    <div className={`${satoshi.className} total-products-filter-component`}>
      <div className="products-filter-heading-component">
        <h3>Filters</h3>
        <button type="button" onClick={() => setMobileFilter(false)}>
          <span className="cross-mark-filter-one"></span>
          <span className="cross-mark-filter-two"></span>
        </button>
      </div>
      <div className="sort-by-filter-container">
        <h4>Sort-By</h4>
        <select
          name="sorting-filter"
          value={inputSort}
          onChange={(e) => setInputSort(e.target.value)}
          className={`${satoshi.className} sort-by-filter-input`}
        >
          <option value="new">Latest</option>
          <option value="old">Oldest</option>
          <option value="highPrice">Price High</option>
          <option value="lowPrice">Price Low</option>
          <option value="highRating">High Rating</option>
          <option value="lowRating">Low Rating</option>
          <option value="lowDiscount">Low Discount</option>
          <option value="highDiscount">High Discount</option>
        </select>
      </div>
      <div className="dress-type-filter-component">
        <h4>Dress Type</h4>
        <div className="all-distinct-dressType-container">
          {!distinctDressType
            ? ""
            : distinctDressType.map((elem) => {
                return (
                  <div key={elem} className="single-distinct-dressType-filter">
                    <input
                      name="dressType"
                      value={elem}
                      onChange={handleDressType}
                      checked={inputdressType[elem]}
                      className="input-distinct-dressType"
                      type="checkbox"
                    ></input>
                    <div className="individual-dressType-filter">{elem}</div>
                  </div>
                );
              })}
        </div>
      </div>
      <div className="price-filter-component">
        <h4>Price</h4>
        <input
          type="range"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          name="priceRange"
          min="0"
          max={Math.ceil(maxPrice / 100) * 100}
        ></input>
        <div className="min-max-price-showing-container">
          <p>
            Min: <span>₹.00</span>
          </p>
          <p>
            Max: <span>₹.{price}</span>
          </p>
        </div>
      </div>
      <div className="color-filter-component">
        <h4>Color</h4>
        <div className="all-colors-container">
          {!allColors
            ? ""
            : allColors.map((elem) => {
                return (
                  <div
                    key={elem}
                    className="single-all-colors-filter-container"
                  >
                    <input
                      onChange={handleColors}
                      checked={inputColors[elem]}
                      value={elem}
                      className="input-all-colors-filter"
                      type="checkbox"
                    ></input>
                    <div
                      className="individual-sizes-container-product"
                      style={{ backgroundColor: `${elem}` }}
                    >
                      {!inputColors[elem] ? (
                        elem
                      ) : (
                        <svg
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5306 2.03063L5.5306 10.0306C5.46092 10.1006 5.37813 10.156 5.28696 10.1939C5.1958 10.2317 5.09806 10.2512 4.99935 10.2512C4.90064 10.2512 4.8029 10.2317 4.71173 10.1939C4.62057 10.156 4.53778 10.1006 4.4681 10.0306L0.968098 6.53063C0.898333 6.46087 0.842993 6.37804 0.805236 6.28689C0.76748 6.19574 0.748047 6.09804 0.748047 5.99938C0.748047 5.90072 0.76748 5.80302 0.805236 5.71187C0.842993 5.62072 0.898333 5.53789 0.968098 5.46813C1.03786 5.39837 1.12069 5.34302 1.21184 5.30527C1.30299 5.26751 1.40069 5.24808 1.49935 5.24808C1.59801 5.24808 1.69571 5.26751 1.78686 5.30527C1.87801 5.34302 1.96083 5.39837 2.0306 5.46813L4.99997 8.4375L12.4693 0.969379C12.6102 0.828483 12.8013 0.749329 13.0006 0.749329C13.1999 0.749329 13.391 0.828483 13.5318 0.969379C13.6727 1.11028 13.7519 1.30137 13.7519 1.50063C13.7519 1.69989 13.6727 1.89098 13.5318 2.03188L13.5306 2.03063Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <div className="dress-style-filter-component">
        <h4>Dress Style</h4>
        <div className="all-dress-style-filter-container">
          <div className="single-dress-style-filter-container">
            <input
              value="casual"
              onChange={handleDressStyle}
              checked={inputDressStyle.casual}
              className="input-all-dressStyle-filter"
              type="checkbox"
            ></input>
            <div className="individual-dressStyle-container">Casual</div>
          </div>
          <div className="single-dress-style-filter-container">
            <input
              value="formal"
              onChange={handleDressStyle}
              checked={inputDressStyle.formal}
              className="input-all-dressStyle-filter"
              type="checkbox"
            ></input>
            <div className="individual-dressStyle-container">Formal</div>
          </div>
          <div className="single-dress-style-filter-container">
            <input
              value="party"
              onChange={handleDressStyle}
              checked={inputDressStyle.party}
              className="input-all-dressStyle-filter"
              type="checkbox"
            ></input>
            <div className="individual-dressStyle-container">Party</div>
          </div>
          <div className="single-dress-style-filter-container">
            <input
              value="gym"
              onChange={handleDressStyle}
              checked={inputDressStyle.gym}
              className="input-all-dressStyle-filter"
              type="checkbox"
            ></input>
            <div className="individual-dressStyle-container">Gym</div>
          </div>
        </div>
      </div>
      <div className="gender-filter-component">
        <h4>Gender</h4>
        <div className="all-gender-filter-comonent">
          <div className="single-gender-filter-component">
            <input
              value="male"
              onChange={handleGender}
              checked={inputGender.male}
              className="input-all-dressStyle-filter"
              type="checkbox"
            ></input>
            <div className="individual-gender-container">Male</div>
          </div>
          <div className="single-gender-filter-component">
            <input
              value="female"
              onChange={handleGender}
              checked={inputGender.female}
              className="input-all-dressStyle-filter"
              type="checkbox"
            ></input>
            <div className="individual-gender-container">Female</div>
          </div>
        </div>
      </div>
      <button
        className={`${satoshi.className} apply-filter-button`}
        onClick={handleFilterApply}
      >
        Apply Filter
      </button>
    </div>
  );
}
