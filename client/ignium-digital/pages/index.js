import Head from 'next/head';

/*
 * Component Imports
 */

import Button from '../components/Button';
import Container from '../components/Container';

/*
 * image imports
 */

import JumboLogoImage from '../public/images/home_logo_jumbo.png';
import WhoWeAreImage from '../public/images/home_who_we_are.png';
import Layout from '../components/Layout';
import Services from '../components/Container/Services';
import Insights from '../components/Container/Insights';

const App = (props) => {

  return (
    <div>
      <Head>
        <title>Ignium Digital | Home</title>
        <meta name="description" content="We are a personalized Sitecore focused digital agency. We currently have a small team of Sitecore MVP's and Sitecore specialists to provide personalized assistance to help you with your digital transformation with Sitecore." />
      </Head>
      <Layout>
        <Container variant="two--column">
          <div>
            <span className="orange--text"><h2>Purpose. Passion. Profit.</h2></span>
            <span className="open--sans custom--font--64"><h1>Investments driven by innovations</h1></span>
            <Button ariaLabel="chat">Let's Chat</Button>
          </div>
          <div>
            <img alt="Ignium Digital Jumobtron Logo" src={JumboLogoImage} style={{ maxWidth: '350px' }} />
          </div>
        </Container>
        <Container tabTitle="Who We Are" variant="two--column">
          <div>
            <h2 style={{ margin: 0 }}>We are a personalized Sitecore focused digital agency</h2>
            <p>
              We currently have a small team of Sitecore MVP's and Sitecore specialists to provide personalized assistance to help you with your digital transformation with Sitecore. We have the experience and expertise to help you with your most technical challenges or helping you with that first step in your Marketing Transformation with Sitecore.
            </p>
            <p>
              Our focus is on large Enterprises that are simply confused about the best way to get the most out of their Sitecore investment. We can also help as you start to look beyond the capabilities of Sitecore and start to explore your future digital initiaves on the web, mobile or Conversational Interfaces
            </p>
            <Button ariaLabel="read more" variant="secondary">Read More</Button>
          </div>
          <div>
            <img alt="Ignium Digital teamwork who we are" src={WhoWeAreImage} />
          </div>
        </Container>
        <Services />
        <Insights />
      </Layout>
    </div>
  );
};

export default App;