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
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/blogs">
							<a>Blogs</a>
						</Link>
					</li>
					<li>
						<span className="red--text">
							<a href="/contact">Contact</a>
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
