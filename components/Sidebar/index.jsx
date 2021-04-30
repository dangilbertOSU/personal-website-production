import { useState } from 'react';
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = (props) => {
	const {
		className,
    links,
		scrollToSection
	} = props;

	const [active, setActive] = useState(0);

	const handleClick = (index, link) => {
		setActive(index);
		scrollToSection(link);
	}

	return (
		<nav className={className}>
      <ul>
        {links && links.map((link, index) => (
          <li className={active === index ? 'active' : ''} key={link} onClick={() => handleClick(index, link)}>
            {link}
          </li>
        ))}
      </ul>
		</nav>
	);
};

Sidebar.defaultProps = {
	className: 'sidebar',
	links: [],
};

Sidebar.propTypes = {
	className: PropTypes.string,
	links: PropTypes.arrayOf(PropTypes.string),
};

export default Sidebar;