/*
 * Import Components
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Sections";
import CareersHeader from "../components/Sections/Careers/CareersHeader";

const App = () => {
  return (
    <div>
      <Head>
        <title>Ignium Digital | Careers</title>
        <meta
          name="description"
          content="We’re looking for people to join the team who are as excited as we are to help companies with that first step in their Marketing Transformation with Sitecore."
        />
      </Head>
      <Layout>
        <Section>
          <CareersHeader />
        </Section>
      </Layout>
    </div>
  );
};

export default App;
