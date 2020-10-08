/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Navbar from "../Navbar";
import Content from "../Content";
import Footer from "../Footer";

const Layout = (props) => {
	const { children } = props;

	return (
		<div>
			<Navbar />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	children: PropTypes.node,
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
