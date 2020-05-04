import Head from 'next/head';

/*
 * Component Imports
 */

import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Content from '../components/Content';

/*
 * image imports
 */

import JumbotronImage from '../public/images/home_logo_jumbo.png';
import JumbotronWithImage from '../components/Content/JumbotronWithImage';
import WhoWeAreImage from '../public/images/home_who_we_are.png';

const App = (props) => {

  return (
    <div>
      <Head>
        <title>Ignium Digital | Home</title>
        <meta name="description" content="We are a personalized Sitecore focused digital agency. We currently have a small team of Sitecore MVP's and Sitecore specialists to provide personalized assistance to help you with your digital transformation with Sitecore." />
      </Head>
      <Navbar />
      <Content>
        <JumbotronWithImage alt="Ignium Digital Jumobtron Logo" src={JumbotronImage}>
          <span className="orange--text custom--font--34"><h2>Purpose. Passion. Profit.</h2></span>
          <span className="open--sans custom--font--64"><h1>Investments driven by innovations</h1></span>
          <Button ariaLabel="chat">Let's Chat</Button>
        </JumbotronWithImage>
        <JumbotronWithImage
          alt="Ignium Digital teamwork who we are"
          tabTitle="Who We Are"
          src={WhoWeAreImage}
        >
          <h2>We are a personalized Sitecore focused digital agency</h2>
          <p>
            We currently have a small team of Sitecore MVP's and Sitecore specialists to provide personalized assistance to help you with your digital transformation with Sitecore. We have the experience and expertise to help you with your most technical challenges or helping you with that first step in your Marketing Transformation with Sitecore.
          </p>
          <p>
            Our focus is on large Enterprises that are simply confused about the best way to get the most out of their Sitecore investment. We can also help as you start to look beyond the capabilities of Sitecore and start to explore your future digital initiaves on the web, mobile or Conversational Interfaces
          </p>
          <Button ariaLabel="Read More" variant="secondary">Read More</Button>
        </JumbotronWithImage>
      </Content>
    </div>
  );
};

export default App;