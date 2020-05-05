import './Layout.css';

import Contact from '../Container/Contact'
import Content from '../Content';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Navbar />
      <Content>
        {children}
        <Contact/>
      </Content>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
