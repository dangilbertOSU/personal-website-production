/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * CSS imports
 */

import "./SectionHeading.css";

const SectionHeading = (props) => {
	const { className, header } = props;

	return <h2 className={className}>{header}</h2>;
};

SectionHeading.defaultProps = {
	className: "section__header",
};

SectionHeading.propTypes = {
	className: PropTypes.string,
	header: PropTypes.string.isRequired,
};

export default SectionHeading;
