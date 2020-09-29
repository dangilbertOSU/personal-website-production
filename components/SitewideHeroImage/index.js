/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * CSS imports
 */

import "./SitewideHeroImage.css";

const SitewideHeroImage = (props) => {
	const { backgroundImage, className, children } = props;

	const divStyle = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	const content = {
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	};

	return (
		<div className={className} style={divStyle}>
			<div style={content}>{children}</div>
		</div>
	);
};

SitewideHeroImage.defaultProps = {
	className: "sitewide-hero-image",
	children: PropTypes.node,
};

SitewideHeroImage.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	backgroundImage: PropTypes.string.isRequired,
};

export default SitewideHeroImage;
