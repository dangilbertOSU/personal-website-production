import { useState } from 'react';

import './Navbar.css';
import Link from 'next/link'
import NavbarIcon from '../SVG/NavbarIcon';
import HamburgerMenu from '../SVG/HamburgerMenu';

const Navbar = (props) => {
    const { className } = props;

    const [mobileNavVisible, setMobileNavVisible] = useState(false);

    return (
        <header>
            <div className={className}>
                <div className={className + "__brand"}>
                    <NavbarIcon />
                </div>
                <button className="navbar__menu__toggle" aria-label="navbar open menu">
                    <HamburgerMenu onClick={() => setMobileNavVisible(!mobileNavVisible)} />
                </button>
                <nav className={className + "__links desktop--links"}>
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
                                <a><span className="orange--text">Let's Chat</span></a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

Navbar.defaultProps = {
    className: 'navbar'
};

export default Navbar;
