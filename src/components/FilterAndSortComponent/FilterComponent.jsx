import React from "react";
import "./style.css";
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

  const { filterState, filterDispatch } = useFilter();
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
            value={filterState.priceRange}
            onChange={(event) => {
              if (event.target.value >= 200)
                filterDispatch({
                  type: actionType.FILTER_ACTIONS.FILTER_BY_PRICE_RANGE,
                  payload: event.target.value,
                });
            }}
          />
          <div className="flex-row justify-spc-bet">
            <span>200</span>
            <span>{filterState.priceRange}</span>
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
                    checked={filterState.categories[index].status}
                    onChange={() => {
                      filterDispatch({
                        type: actionType.FILTER_ACTIONS.FILTER_BY_CATEGORIES,
                        payload: index,
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
                    checked={filterState.albums[index].status}
                    onChange={() => {
                      filterDispatch({
                        type: actionType.FILTER_ACTIONS.FILTER_BY_ALBUMS,
                        payload: index,
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
            {filterByRating.map((rating, index) => {
              return (
                <li className="text-light-weight my-0-25" key={index}>
                  <input
                    type="radio"
                    name="rating"
                    id={`${rating}_rating`}
                    value={filterState.rating}
                    checked={filterState.rating === rating}
                    onChange={() => {
                      filterDispatch({
                        type: actionType.FILTER_ACTIONS.FILTER_BY_RATING,
                        payload: rating,
                      });
                    }}
                  />
                  <label className="ml-0-25 mr-1" htmlFor={`${rating}_rating`}>
                    More than {rating} <FaStar className="rating-checked" />
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="filter-categories">
          <p className="filter-title mb-0-5">OTHER</p>
          <ul className="list-style-none">
            <li className="text-light-weight my-0-25">
              <input type="checkbox" name="accesory-type" id="other-cat" />
              <label className="ml-0-25" htmlFor="other-cat">
                Include out of stock
              </label>
            </li>
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

export { FilterComponent };
