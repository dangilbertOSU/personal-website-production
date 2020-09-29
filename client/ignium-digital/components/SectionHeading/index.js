/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * CSS imports
 */

import "./SectionHeading.css";

const SectionHeading = (props) => {
	const { className, header, tab } = props;

	return <h2 className={className}>{header}</h2>;
};

SectionHeading.defaultProps = {
	className: "section__header",
	header: "",
	tab: "",
};

SectionHeading.propTypes = {
	className: PropTypes.string,
	header: PropTypes.string,
	tab: PropTypes.string,
};

export default SectionHeading;
