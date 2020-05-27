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
			<div className={`${className}__image`}>
				<img src={image} alt={alt} />
			</div>
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
};

Card.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	content: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default Card;
