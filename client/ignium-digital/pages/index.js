import Head from "next/head";

/*
 * Component Imports
 */

import Layout from "../components/Layout";
import Services from "../components/Container/Services";
import Insights from "../components/Container/Insights";
import Welcome from "../components/Container/Welcome";
import WhoWeAre from "../components/Container/WhoWeAre";

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
        <Welcome />
        <WhoWeAre />
        <Services />
        <Insights />
      </Layout>
    </div>
  );
};

export default App;
