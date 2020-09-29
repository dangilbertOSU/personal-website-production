/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Link from "next/link";

/*
 * Image/SVG imports
 */

import FooterLogo from "../SVG/FooterLogo";
import TwitterLogo from "../SVG/social/TwitterLogo";
import LinkedInLogo from "../SVG/social/LinkedInLogo";
import EmailLogo from "../SVG/social/EmailLogo";

import "./Footer.css";

const Footer = (props) => {
	const { className } = props;

	return (
		<footer className={className}>
			<div className={`${className}__footer__logo`}>
				<FooterLogo />
			</div>
			<nav className={`${className}__links`}>
				<ul>
					<li>
						<Link href="/whoweare">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/services">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/insights">
							<a>Blogs</a>
						</Link>
					</li>
					<li>
						<span className="red--text">
							<a
								href="https://calendly.com/ignium-digital/1-on-1-consultation-services"
								target="_blank"
								rel="noopener noreferrer"
							>
								Contact
							</a>
						</span>
					</li>
				</ul>
			</nav>
			<p>© Dannon Gilbert 2020</p>
		</footer>
	);
};

Footer.defaultProps = {
	className: "footer",
};

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
