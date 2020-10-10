/*
 * Function imports
 */

import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/*
 * Component imports
 */

import Link from "next/link";

/*
 * Image/SVG imports
 */

import NavbarIcon from "../SVG/NavbarIcon";

/*
 * CSS imports
 */

import "./Navbar.css";

const Navbar = (props) => {
	const { className } = props;

	const [mobileNavVisible, setMobileNavVisible] = useState(false);
	const [showShadow, setShowShadow] = useState(false);

	const router = useRouter();
	const links = ["about", "blogs", "contact"];

	useEffect(() => {
		window.onscroll = () => {
			if (window.pageYOffset > 100) {
				return setShowShadow(true);
			}

			return setShowShadow(false);
		};
	}, []);

	const link = (linkName) => (
		<li>
			<Link href={`/${linkName}`}>
				<a className={router.pathname === `/${linkName}` ? "active" : ""}>
					{linkName}
				</a>
			</Link>
		</li>
	);

	return (
		<nav
			className={
				(mobileNavVisible ? `${className} grow` : className) +
				(showShadow ? " shadow" : "")
			}
		>
			<div className={`${className}--body`}>
				<div className={`${className}__brand`}>
					<Link href="/">
						<a>
							<NavbarIcon />
						</a>
					</Link>
				</div>
				<span
					aria-label="navbar open mobile menu"
					className={
						mobileNavVisible
							? "navbar__menu__toggle opened"
							: "navbar__menu__toggle"
					}
					href="#"
					onClick={() => setMobileNavVisible(!mobileNavVisible)}
					onKeyDown={() => setMobileNavVisible(!mobileNavVisible)}
					role="button"
					type="button"
					tabIndex="0"
				>
					<span className="bar bar--1" />
					<span className="bar bar--2" />
					<span className="bar bar--3" />
				</span>
				<div
					className={`${className}__links desktop--links${
						mobileNavVisible ? " active" : " inactive"
					}`}
				>
					<ul>
						<li>
							<Link href="/">
								<a className={router.pathname === "/" ? "active" : ""}>Home</a>
							</Link>
						</li>
						{links.map(link)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	className: "navbar",
};

Navbar.propTypes = {
	className: PropTypes.string,
};

export default Navbar;
