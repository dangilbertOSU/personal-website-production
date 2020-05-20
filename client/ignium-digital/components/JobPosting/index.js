/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Image/SVG imports
 */

import LocationIcon from "../SVG/LocationIcon";
import LaunchIcon from "../SVG/LaunchIcon";

/*
 * CSS imports
 */

import "./JobPosting.css";

const JobPosting = (props) => {
	const {
		className,
		title,
		description,
		location,
		link,
	} = props;

	return (
		<div className={className}>
			<div className={`${className}__location`}>
				<LocationIcon />
				<p>{location}</p>
			</div>
			<h3>{title}</h3>
			<div className={`${className}__description`}>
				<p>{description}</p>
			</div>
			<div className={`${className}__linkedin`}>
				<LaunchIcon />
				<a href={link} target="_blank" rel="noopener noreferrer">
					VIEW ON LINKEDIN
				</a>
			</div>
		</div>
	);
};

JobPosting.defaultProps = {
	className: "job__posting",
	description: "description",
	link: "#",
	location: "location",
	title: "title",
};

JobPosting.propTypes = {
	className: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
	location: PropTypes.string,
	title: PropTypes.string,
};

export default JobPosting;
