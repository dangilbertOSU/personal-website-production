import { useState } from 'react';

import './Navbar.css';
import Link from 'next/link'
import NavbarIcon from '../SVG/NavbarIcon';

const Navbar = (props) => {
    const { className } = props;

    const [mobileNavVisible, setMobileNavVisible] = useState(false);

    return (
        <nav className={className + (mobileNavVisible ? " grow" : "")}>
            <div className={className + "__brand"}>
                <NavbarIcon />
            </div>
            <a className="navbar__menu__toggle" aria-label="navbar open mobile menu" onClick={() => setMobileNavVisible(!mobileNavVisible)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={className + "__links desktop--links" + (mobileNavVisible ? " active" : " inactive")}>
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
                        <span className="orange--text"><a>Let's Chat</a></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Navbar.defaultProps = {
    className: 'navbar'
};

export default Navbar;
