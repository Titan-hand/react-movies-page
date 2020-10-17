import React from "react";
import PropTypes from "prop-types";

function Banner({
  title,
  subtitle = "",
  image,

  color1 = "f5af19ed",
  color2 = "f127119a",
}) {
  const styles = {
    background: `linear-gradient(to right, #${color1}, #${color2}), url("${image}")`,
  };
  return (
    <header className="banner-category" style={styles}>
      <h3 className="banner-title title">{title}</h3>
      <h5 className="banner-subtitle">{subtitle}</h5>
    </header>
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
