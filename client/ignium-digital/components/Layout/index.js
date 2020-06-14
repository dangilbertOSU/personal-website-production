/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Navbar from "../Navbar";
import Content from "../Content";
import Contact from "../Contact";
import Footer from "../Footer";

const Layout = (props) => {
	const { children, contact } = props;

	return (
		<div>
			<Navbar />
			<Content>
				{children}
				{contact && <Contact />}
			</Content>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	children: PropTypes.node,
	contact: true,
};

Layout.propTypes = {
	children: PropTypes.node,
	contact: PropTypes.bool,
};

export default Layout;
