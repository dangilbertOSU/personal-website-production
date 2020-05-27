import PropTypes from "prop-types";
import "./Biography.css";

/*
 * Image/SVG imports
 */

import TwitterLogo from "../SVG/social/TwitterLogo";
import LinkedInLogo from "../SVG/social/LinkedInLogo";
import YouTubeLogo from "../SVG/social/YouTubeLogo";
import GitHubLogo from "../SVG/social/GitHubLogo";

const Biography = (props) => {
	const {
		className,
		name,
		jobTitle,
		description,
		twitterLink,
		linkedInLink,
		youtubeLink,
		githubLink,
		biographyPicture,
	} = props;

	return (
		<div className={className}>
			<div>
				<h2>{name}</h2>
				<p>{jobTitle}</p>
				<p>{description}</p>
				<div className={`${className}__social-icons`}>
					{twitterLink && (
						<a href={twitterLink} target="_blank">
							<TwitterLogo />
						</a>
					)}
					{linkedInLink && (
						<a href={twitterLink} target="_blank">
							<LinkedInLogo />
						</a>
					)}
					{youtubeLink && (
						<a href={youtubeLink} target="_blank">
							<YouTubeLogo />
						</a>
					)}
					{githubLink && (
						<a href={githubLink} target="_blank">
							<GitHubLogo />
						</a>
					)}
				</div>
			</div>
			<div>
				<img src={biographyPicture} />
			</div>
		</div>
	);
};

Biography.defaultProps = {
	className: "biography",
};

Biography.propTypes = {
	className: PropTypes.string,
};

export default Biography;
