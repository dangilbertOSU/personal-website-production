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
				<span className={`${className}__footer__line`}></span>
				<FooterLogo />
				<span className={`${className}__footer__line`}></span>
			</div>
			<div className={`${className}__social__icons`}>
				<a
					href="https://twitter.com/IgniumDigital"
					rel="noopener noreferrer"
					target="_blank"
				>
					<TwitterLogo />
				</a>
				<a
					href="https://www.linkedin.com/company/ignium-digital"
					rel="noopener noreferrer"
					target="_blank"
				>
					<LinkedInLogo />
				</a>
				<a
					href="https://calendly.com/ignium-digital/1-on-1-consultation-services?month=2020-05"
					rel="noopener noreferrer"
					target="_blank"
				>
					<EmailLogo />
				</a>
			</div>
			<nav className={`${className}__links`}>
				<ul>
					<li>
						<Link href="/whoweare">
							<a>Who We Are</a>
						</Link>
					</li>
					<li>
						<Link href="/services">
							<a>Services</a>
						</Link>
					</li>
					<li>
						<Link href="/insights">
							<a>Insights</a>
						</Link>
					</li>
					<li>
						<Link href="/careers">
							<a>Careers</a>
						</Link>
					</li>
					<li>
						<Link href="/letschat">
							<a>
								<span className="orange--text">
									Let&apos;s Chat
								</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
			<p>© Ignium Digital, LLC. 2019, All Rights Reserved</p>
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
