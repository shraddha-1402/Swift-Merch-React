import "./style.css";
import React from "react";
import PropTypes from "prop-types";

const CategoryCard = ({ categoryDetails }) => {
  const { imgUrl, imgAlt, category } = categoryDetails;
  return (
    <div className="card mw-16r pos-rel">
      <img src={imgUrl} alt={imgAlt} className="card-img responsive-img" />
      <h3 className="pos-abs featured-product-text">{category}</h3>
    </div>
  );
};

CategoryCard.propTypes = {
  categoryDetails: PropTypes.object,
};

export { CategoryCard };
