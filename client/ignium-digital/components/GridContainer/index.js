import PropTypes from "prop-types";
import "./GridContainer.css";

const GridContainer = (props) => {
  const { className, children, title } = props;

  return (
    <div className={className}>
      <h2>{title}</h2>
      <div className="grid__items">{children}</div>
    </div>
  );
};

GridContainer.defaultProps = {
  className: "grid__container",
  title: null,
};

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

export default GridContainer;
