import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RGBA from "../../Helpers/rgba.js";

function Banner({
  title,
  subtitle = "",
  image,
  slug,
  color1 = "f5af19ed",
  color2 = "f127119a",
}) {
  const styles = {
    background: `linear-gradient(to right, ${RGBA(color1, 90)}, ${RGBA(
      color2,
      60
    )}), url("${image}")`,
  };
  return (
    <Link to={slug}>
      <header className="banner-category" style={styles}>
        <h3 className="banner-title title">{title}</h3>
        <h5 className="banner-subtitle">{subtitle}</h5>
      </header>
    </Link>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  color1: PropTypes.string,
  color2: PropTypes.string,
};
export default Banner;
