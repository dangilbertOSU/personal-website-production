/*
 * Function imports
 */

import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useState } from "react";

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

	const router = useRouter();

	return (
		<nav className={mobileNavVisible ? `${className} grow` : className}>
			<div className="content_test">
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
					onKeyDown={() =>
						setMobileNavVisible(!mobileNavVisible)
					}
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
							<Link href="/whoweare">
								<a
									className={
										router.pathname ===
										"/whoweare"
											? "active"
											: ""
									}
								>
									Who We Are
								</a>
							</Link>
						</li>
						<li>
							<Link href="/services">
								<a
									className={
										router.pathname ===
										"/services"
											? "active"
											: ""
									}
								>
									Services
								</a>
							</Link>
						</li>
						<li>
							<Link href="/insights">
								<a
									className={
										router.pathname ===
										"/insights"
											? "active"
											: ""
									}
								>
									Insights
								</a>
							</Link>
						</li>
						<li>
							<Link href="/careers">
								<a
									className={
										router.pathname === "/careers"
											? "active"
											: ""
									}
								>
									Careers
								</a>
							</Link>
						</li>
						<li>
							<span className="orange--text">
								<a>Let&apos;s Chat</a>
							</span>
						</li>
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
