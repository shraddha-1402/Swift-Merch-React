import "./style.css";
import React, { useEffect, useState } from "react";
import { useFilter, useData } from "../../context";
import { applyFilterAndSort } from "../../utils/filterAndSortFunctions/applyFilterAndSort";
import { SortComponent, FilterComponent, ProductCard } from "../../components";
import { actionType } from "../../constants";

const ProductListingPage = () => {
  const { filterState, filterDispatch } = useFilter();
  const { dataState } = useData();

  const [showBottombar, setShowBottombar] = useState({
    showSortByTab: false,
    showFilterByTab: false,
  });

  useEffect(() => {
    return () => {
      filterDispatch({ type: actionType.FILTER_ACTIONS.RESET_FILTER });
      filterDispatch({ type: actionType.FILTER_ACTIONS.RESET_SORT });
    };
  }, []);

  const filteredSortedProducts = applyFilterAndSort(filterState, dataState);

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
      {filteredSortedProducts?.length ? (
        <div className="product-container grid-3-col-layout pos-rel">
          {filteredSortedProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      ) : (
        <h2 className="info-text">
          Sorry no products available for the selected filters
        </h2>
      )}
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
