/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Sections";
import HomeHeader from "../components/Sections/Home/HomeHeader";
import WhoWeAreSection from "../components/Sections/Home/WhoWeAreSection";
import ServicesSection from "../components/Sections/Home/ServicesSection";
import InsightsSection from "../components/Sections/Home/InsightsSection";

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
        <Section>
          <HomeHeader />
        </Section>
        <Section>
          <WhoWeAreSection />
        </Section>
        <div className="blue--background">
          <Section>
            <ServicesSection />
          </Section>
        </div>
        <Section>
          <InsightsSection />
        </Section>
      </Layout>
    </div>
  );
};

export default App;
