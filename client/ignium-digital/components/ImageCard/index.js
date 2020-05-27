/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * CSS imports
 */

import "./ImageCard.css";

const Card = (props) => {
	const { className, content, image, title } = props;

	return (
		<div className={className}>
			<img src={image} />
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

Card.defaultProps = {
	className: "ImageCard",
	content: "",
	Image: null,
	title: "",
};

Card.propTypes = {
	className: PropTypes.string,
	content: PropTypes.string,
	Image: PropTypes.func,
	title: PropTypes.string.isRequired,
};

export default Card;
