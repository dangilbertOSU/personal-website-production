/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Content from "../Content";
import Sidebar from "../Sidebar";

const tempLinks = ["Bio", "Experience", "Projects", "Skills", "Blogs"];

const Layout = (props) => {
	const { children, sections, scrollToSection } = props;

	return (
		<>
			<Sidebar links={sections} scrollToSection={scrollToSection} />
			{children}
		</>
	);
};

Layout.defaultProps = {
	children: PropTypes.node,
	sections: [],
};

Layout.propTypes = {
	children: PropTypes.node,
	sections: PropTypes.arrayOf(PropTypes.string),
};

export default Layout;
