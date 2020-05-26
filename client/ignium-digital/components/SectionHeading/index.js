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
