/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * CSS imports
 */

import "./ImageCard.css";

const Card = (props) => {
	const { alt, className, content, image, title } = props;

	return (
		<div className={className}>
			<img src={image} alt={alt} />
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

Card.defaultProps = {
	alt: null,
	className: "ImageCard",
	content: "",
	image: null,
	title: "",
};

Card.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	content: PropTypes.string,
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Card;
