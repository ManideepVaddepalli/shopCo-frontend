"use client";
import AllProductsComponent from "./allProductsComponent/AllProductsComponent";
import FilterComponent from "./filterComponent/FilterComponent";
import { useState } from "react";
import "./shopcomponent.css";

export default function ShopComponent({ props, searchParams, constraints }) {
  const [mobileFilter, setMobileFilter] = useState(false);
  return (
    <div className="total-shop-component-container">
      {mobileFilter ? (
        <div className="mobile-filter-component">
          <FilterComponent
            constraints={constraints.product}
            searchParams={searchParams}
            filterState={{ mobileFilter, setMobileFilter }}
          />
        </div>
      ) : (
        <></>
      )}
      <AllProductsComponent
        products={props}
        searchParams={searchParams}
        filterState={{ mobileFilter, setMobileFilter }}
      />
    </div>
  );
}
