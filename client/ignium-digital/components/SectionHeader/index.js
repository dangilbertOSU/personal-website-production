import PropTypes from "prop-types";
import "./SectionHeader.css";

const SectionHeader = (props) => {
  const { className, header, tab } = props;

  return (
    <h2 className={className}>
      {header}
      <span className="section__tab">
        <span className="section__tab__line" />
        <h4>{tab}</h4>
      </span>
    </h2>
  );
};

SectionHeader.defaultProps = {
  className: "section__header",
  header: "",
  tab: "",
};

SectionHeader.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  tab: PropTypes.string,
};

export default SectionHeader;
