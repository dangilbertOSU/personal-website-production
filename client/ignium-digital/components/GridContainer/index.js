/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * CSS imports
 */

import "./GridContainer.css";

const GridContainer = (props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      <div className="grid__items">{children}</div>
    </div>
  );
};

GridContainer.defaultProps = {
  className: "grid__container",
};

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GridContainer;
