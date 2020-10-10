/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Button from "../Button";

/*
 * CSS imports
 */

import "./TitleDescriptionCTA.css";

const TitleDescriptionCTA = (props) => {
	const {
		buttonText,
		buttonAriaLabel,
		className,
		description,
		link,
		title,
	} = props;

	return (
		<div className={className}>
			<div className={`${className}--data`}>
				<h2>{title}</h2>
				<h1>{description}</h1>
				<a href={link}>
					<Button ariaLabel={buttonAriaLabel}>{buttonText}</Button>
				</a>
			</div>
		</div>
	);
};

TitleDescriptionCTA.defaultProps = {
	className: "title-description-cta",
};

TitleDescriptionCTA.propTypes = {
	buttonText: PropTypes.string.isRequired,
	buttonAriaLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default TitleDescriptionCTA;
