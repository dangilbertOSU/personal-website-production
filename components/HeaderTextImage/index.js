/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import SectionHeading from "../SectionHeading";

/*
 * CSS imports
 */

import "./HeaderTextImage.css";

const HeaderTextImage = (props) => {
	const { alt, className, header, children, image, orientation } = props;

	const component1 = orientation == "regular" ? "left" : "right";
	const component2 = orientation == "regular" ? "right" : "left";

	return (
		<div className={className}>
			<div className={`${className}--${component1}`}>
				<SectionHeading header={header} />
				{children}
			</div>
			<div className={`${className}--${component2}`}>
				<img
					className={`${className}--image`}
					alt={alt}
					src={image}
				/>
			</div>
		</div>
	);
};

HeaderTextImage.defaultProps = {
	className: "header__text__image",
};

HeaderTextImage.propTypes = {
	className: PropTypes.string,
};

export default HeaderTextImage;
