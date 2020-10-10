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
		alt,
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
			<div className={`${className}__content`}>
				<h2>{name}</h2>
				<p>{jobTitle}</p>
				<p>{description}</p>
				<div className={`${className}__social-icons`}>
					{twitterLink && (
						<a
							href={twitterLink}
							target="_blank"
							aria-label="Twitter"
							rel="noopener noreferrer"
						>
							<TwitterLogo />
						</a>
					)}
					{linkedInLink && (
						<a
							href={linkedInLink}
							target="_blank"
							aria-label="LinkedIn"
							rel="noopener noreferrer"
						>
							<LinkedInLogo />
						</a>
					)}
					{youtubeLink && (
						<a
							href={youtubeLink}
							target="_blank"
							aria-label="YouTube"
							rel="noopener noreferrer"
						>
							<YouTubeLogo />
						</a>
					)}
					{githubLink && (
						<a
							href={githubLink}
							target="_blank"
							aria-label="GitHub"
							rel="noopener noreferrer"
						>
							<GitHubLogo />
						</a>
					)}
				</div>
			</div>
			<div className={`${className}__image`}>
				{biographyPicture && <img src={biographyPicture} alt={alt} />}
			</div>
		</div>
	);
};

Biography.defaultProps = {
	alt: "",
	className: "biography",
	name: "",
	jobTitle: "",
	description: "",
	twitterLink: null,
	linkedInLink: null,
	youtubeLink: null,
	githubLink: null,
	biographyPicture: null,
};

Biography.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	name: PropTypes.string,
	jobTitle: PropTypes.string,
	description: PropTypes.string,
	twitterLink: PropTypes.string,
	linkedInLink: PropTypes.string,
	youtubeLink: PropTypes.string,
	githubLink: PropTypes.string,
	biographyPicture: PropTypes.string,
};

export default Biography;
