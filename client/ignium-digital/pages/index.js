import Head from 'next/head';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Content from '../components/Content';

import JumbotronImage from '../public/images/home_logo_jumbo.png';
import JumbotronWithImage from '../components/Content/JumbotronWithImage';

const App = (props) => {

  return (
    <div>
      <Head>
        <title>Ignium Digital | Home</title>
        <meta name="description" content="We are a personalized Sitecore focused digital agency. We currently have a small team of Sitecore MVP's and Sitecore specialists to provide personalized assistance to help you with your digital transformation with Sitecore." />
      </Head>
      <Navbar />
      <Content>
        <JumbotronWithImage alt="Ignium Digitial Jumobtron Logo" src={JumbotronImage}>
          <span className="orange--text custom--font--34"><h2>Purpose. Passion. Profit.</h2></span>
          <span className="open--sans custom--font--64"><h1>Investments driven by innovations</h1></span>
          <Button ariaLabel="chat">Let's Chat</Button>
        </JumbotronWithImage>
      </Content>
    </div>
  );
};

export default App;