/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Button from "../../../Button";

/*
 * Image/SVG imports
 */

import DannonBeach from "../../../../public/images/Dannon/DannonAtBeach.jpg";

/*
 * CSS imports
 */

import "./HomeHeader.css";

const HomeHeader = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="welcome__text">
				<h2>Dannon Gilbert</h2>
				<h1>Software Engineer</h1>
				<a href="/about" target="_blank" rel="noopener noreferrer">
					<Button ariaLabel="About me">About Me</Button>
				</a>
			</div>
		</div>
	);
};

HomeHeader.defaultProps = {
	className: "welcome",
};

HomeHeader.propTypes = {
	className: PropTypes.string,
};

export default HomeHeader;
