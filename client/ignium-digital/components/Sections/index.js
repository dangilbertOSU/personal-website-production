import PropTypes from "prop-types";
import "./Section.css";

const Section = (props) => {
  const { className, children } = props;

  return <div className={className}>{children}</div>;
};

Section.defaultProps = {
  className: "section",
  children: PropTypes.node,
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
