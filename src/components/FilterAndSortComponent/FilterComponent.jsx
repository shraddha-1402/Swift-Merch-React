import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import {
  filterByCategory,
  filterByAlbum,
  filterByRating,
  actionType,
} from "../../constants";
import { FaStar } from "react-icons/fa";
import { useFilter } from "../../context/filter-context";

const FilterComponent = ({ showBottombar, setShowBottombar }) => {
  const handleClick = () =>
    setShowBottombar((showBottombar) => ({
      ...showBottombar,
      showFilterByTab: !showBottombar.showFilterByTab,
    }));

  const {
    filterState: { priceRange, categories, albums, rating },
    filterDispatch,
  } = useFilter();
  return (
    <div className={showBottombar.showFilterByTab ? "" : "hidden-for-mobile"}>
      <div
        className={showBottombar.showFilterByTab ? "overflow-scroll px-1" : ""}
      >
        <div className="filter-heading my-1">
          <p className="text-bold-weight">FILTERS</p>
          <button
            onClick={() => {
              filterDispatch({
                type: actionType.FILTER_ACTIONS.RESET_FILTER,
              });
            }}
            className="reset-btn"
          >
            Clear Filters
          </button>
        </div>

        <div className="filter-categories">
          <p className="filter-title mb-0-5">PRICE RANGE</p>
          <input
            type="range"
            min="0"
            max="1000"
            step="100"
            className="w-100p price-range"
            value={priceRange}
            onChange={(event) => {
              if (event.target.value >= 200)
                filterDispatch({
                  type: actionType.FILTER_ACTIONS.FILTER_BY_PRICE_RANGE,
                  payload: { priceRange: event.target.value },
                });
            }}
          />
          <div className="flex-row justify-spc-bet">
            <span>200</span>
            <span>{priceRange}</span>
          </div>
        </div>

        <div className="filter-categories">
          <p className="filter-title mb-0-5">CATEGORIES</p>
          <ul className="list-style-none">
            {filterByCategory.map((filter, index) => {
              return (
                <li key={index} className="text-light-weight my-0-25">
                  <input
                    type="checkbox"
                    name="accesory-type"
                    id={`category${index + 1}`}
                    checked={categories[index].status}
                    onChange={() => {
                      filterDispatch({
                        type: actionType.FILTER_ACTIONS.FILTER_BY_CATEGORIES,
                        payload: { category: filter },
                      });
                    }}
                  />
                  <label className="ml-0-25" htmlFor={`category${index + 1}`}>
                    {filter.split("_").join(" ")}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="filter-categories">
          <p className="filter-title mb-0-5">ALBUMS</p>
          <ul className="list-style-none">
            {filterByAlbum.map((filter, index) => {
              return (
                <li key={index} className="text-light-weight my-0-25">
                  <input
                    type="checkbox"
                    name="accesory-type"
                    id={`album${index + 1}`}
                    checked={albums[index].status}
                    onChange={() => {
                      filterDispatch({
                        type: actionType.FILTER_ACTIONS.FILTER_BY_ALBUMS,
                        payload: { albums: filter },
                      });
                    }}
                  />
                  <label className="ml-0-25" htmlFor={`album${index + 1}`}>
                    {filter.split("_").join(" ")}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="filter-categories">
          <p className="filter-title mb-0-5">RATING</p>
          <ul className="list-style-none">
            {filterByRating.map((productRating, index) => {
              return (
                <li className="text-light-weight my-0-25" key={index}>
                  <input
                    type="radio"
                    name="rating"
                    id={`${productRating}_rating`}
                    value={rating}
                    checked={rating === productRating}
                    onChange={() => {
                      filterDispatch({
                        type: actionType.FILTER_ACTIONS.FILTER_BY_RATING,
                        payload: { rating: productRating },
                      });
                    }}
                  />
                  <label
                    className="ml-0-25 mr-1"
                    htmlFor={`${productRating}_rating`}
                  >
                    More than {productRating}
                    <FaStar className="rating-checked" />
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className={
            showBottombar.showFilterByTab
              ? "flex-row gap-1"
              : "flex-row gap-1 hidden"
          }
        >
          <button
            className="btn btn-solid-secondary w-100p my-1"
            onClick={handleClick}
          >
            Cancel
          </button>
          <button
            className="btn btn-outline-secondary w-100p my-1"
            onClick={handleClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

FilterComponent.propTypes = {
  showBottombar: PropTypes.object,
  setShowBottombar: PropTypes.func,
};

export { FilterComponent };
