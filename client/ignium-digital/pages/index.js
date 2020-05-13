/*
 * Component Imports
 */

import Head from "next/head";
import HomeHeader from "../components/Sections/Home/HomeHeader";
import Insights from "../components/Sections/Home/InsightsSection";
import Layout from "../components/Layout";
import Services from "../components/Sections/Home/ServicesSection";
import WhoWeAre from "../components/Sections/Home/WhoWeAreSection";

const App = (props) => {
  return (
    <div>
      <Head>
        <title>Ignium Digital | Home</title>
        <meta
          name="description"
          content="We are a personalized Sitecore focused digital agency. We currently have a small team of Sitecore MVP's and Sitecore specialists to provide personalized assistance to help you with your digital transformation with Sitecore."
        />
      </Head>
      <Layout>
        <HomeHeader />
        <WhoWeAre />
        <Services />
        <Insights />
      </Layout>
    </div>
  );
};

export default App;
