/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * CSS imports
 */

import "./Section.css";

const Section = (props) => {
	const { className, children } = props;

	return (
		<section className={className}>
			<div className={`${className}--body`}>{children}</div>
		</section>
	);
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
