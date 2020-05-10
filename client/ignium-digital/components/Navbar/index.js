import PropTypes from 'prop-types';
import { useState } from 'react';

import './Navbar.css';
import Link from 'next/link';
import NavbarIcon from '../SVG/NavbarIcon';

const Navbar = (props) => {
	const { className } = props;

	const [mobileNavVisible, setMobileNavVisible] = useState(false);

	return (
		<nav className={className + (mobileNavVisible ? ' grow' : '')}>
			<div className={`${className}__brand`}>
				<Link href="/">
					<a><NavbarIcon /></a>
				</Link>
			</div>
			<span
				aria-label="navbar open mobile menu"
				className="navbar__menu__toggle"
				href="#"
				onClick={() => setMobileNavVisible(!mobileNavVisible)}
				onKeyDown={() => setMobileNavVisible(!mobileNavVisible)}
				role="button"
				type="button"
				tabIndex="0"
			>
				<span className="bar" />
				<span className="bar" />
				<span className="bar" />
			</span>
			<div className={`${className}__links desktop--links${mobileNavVisible ? ' active' : ' inactive'}`}>
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
							<span className="orange--text"><a>Let&apos;s Chat</a></span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	className: 'navbar',
};

Navbar.propTypes = {
	className: PropTypes.string,
};

export default Navbar;