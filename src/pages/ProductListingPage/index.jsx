import "./style.css";
import React, { useState } from "react";
import { useFilter, useProduct } from "../../context";
import { applyFilterAndSort } from "../../utils/filterAndSortFunctions/applyFilterAndSort";
import { SortComponent, FilterComponent, ProductCard } from "../../components";

const ProductListingPage = () => {
  const { filterState } = useFilter();
  const { productsState } = useProduct();

  const [showBottombar, setShowBottombar] = useState({
    showSortByTab: false,
    showFilterByTab: false,
  });

  const filteredSortedProducts = applyFilterAndSort(filterState, productsState);

  return (
    <main className="flex-row main-content">
      <div className="filter-sidebar">
        <SortComponent
          showBottombar={showBottombar}
          setShowBottombar={setShowBottombar}
        />
        <FilterComponent
          showBottombar={showBottombar}
          setShowBottombar={setShowBottombar}
        />
      </div>

      <div className="product-container grid-3-col-layout pos-rel">
        {filteredSortedProducts.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
      <div className="filter-mobile-bottombar">
        <button
          className="filter-mobile-btn"
          onClick={() =>
            setShowBottombar((showBottombar) => ({
              ...showBottombar,
              showSortByTab: !showBottombar.showSortByTab,
            }))
          }
        >
          SORT BY
        </button>
        <span className="seperator-span"></span>
        <button
          className="filter-mobile-btn"
          onClick={() =>
            setShowBottombar((showBottombar) => ({
              ...showBottombar,
              showFilterByTab: !showBottombar.showFilterByTab,
            }))
          }
        >
          FILTER BY
        </button>
      </div>
    </main>
  );
};

export { ProductListingPage };
