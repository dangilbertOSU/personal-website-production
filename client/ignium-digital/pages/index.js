import Head from "next/head";

/*
 * Component Imports
 */

import Layout from "../components/Layout";
import Services from "../components/Container/Home/Services";
import Insights from "../components/Container/Home/Insights";
import HomeHeader from "../components/Container/Home/HomeHeader";
import WhoWeAre from "../components/Container/Home/WhoWeAre";

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
