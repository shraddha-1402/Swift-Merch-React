import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { actionType, sortingOptions } from "../../constants";
import { useFilter } from "../../context/filter-context";

const SortComponent = ({ showBottombar, setShowBottombar }) => {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className={showBottombar.showSortByTab ? "" : "hidden-for-mobile"}>
      <div className={showBottombar.showSortByTab ? "px-1" : ""}>
        <div className="filter-heading my-1">
          <p className="text-bold-weight">SORT BY</p>
          <div className="flex-row align-center">
            <button
              onClick={() => {
                filterDispatch({ type: actionType.FILTER_ACTIONS.RESET_SORT });
              }}
              className="reset-btn"
            >
              Clear Sort
            </button>
            <FaTimes
              className={showBottombar.showSortByTab ? "ml-0-5 icon" : "hidden"}
              onClick={() =>
                setShowBottombar((showBottombar) => ({
                  ...showBottombar,
                  showSortByTab: !showBottombar.showSortByTab,
                }))
              }
            />
          </div>
        </div>

        <div className="filter-categories mb-1">
          <p className="filter-title mb-0-5">PRICE</p>
          <ul className="list-style-none">
            {sortingOptions.map((sortType, index) => {
              return (
                <li className="text-light-weight my-0-25" key={index}>
                  <input
                    type="radio"
                    name="sortType"
                    id={sortType.toLowerCase()}
                    checked={filterState.sortByPrice === sortType.toUpperCase()}
                    onChange={() => {
                      filterDispatch({
                        type: actionType.FILTER_ACTIONS.SORT_BY_PRICE,
                        payload: sortType.toUpperCase(),
                      });
                    }}
                  />
                  <label className="ml-0-25" htmlFor={sortType.toLowerCase()}>
                    {sortType.split("_").join(" ")}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

SortComponent.propTypes = {
  showBottombar: PropTypes.object,
  setShowBottombar: PropTypes.func,
};

export { SortComponent };
