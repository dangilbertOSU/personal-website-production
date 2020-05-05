import './Layout.css';

import Navbar from '../Navbar';
import Content from '../Content';
import Footer from '../Footer';

const Layout = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Navbar />
      <Content>
        {children}
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
