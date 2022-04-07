import "./style.css";
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { actionType, routes } from "../../constants";
import { useFilter } from "../../context";

const CategoryCard = ({ categoryDetails }) => {
  const { imgUrl, imgAlt, category, filterName } = categoryDetails;
  const navigate = useNavigate();
  const { filterDispatch } = useFilter();

  const handleCategoryCardClick = () => {
    navigate(routes.PRODUCTS_PAGE);
    filterDispatch({
      type: actionType.FILTER_ACTIONS.FILTER_BY_CATEGORIES,
      payload: filterName,
    });
  };

  return (
    <div className="card mw-16r pos-rel" onClick={handleCategoryCardClick}>
      <img src={imgUrl} alt={imgAlt} className="card-img responsive-img" />
      <h3 className="pos-abs featured-product-text">{category}</h3>
    </div>
  );
};

CategoryCard.propTypes = {
  categoryDetails: PropTypes.object,
};

export { CategoryCard };
