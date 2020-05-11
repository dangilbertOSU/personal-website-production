import PropTypes from "prop-types";

import Contact from "../Contact";
import Content from "../Content";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Navbar />
      <Content>
        {children}
        <Contact />
      </Content>
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
