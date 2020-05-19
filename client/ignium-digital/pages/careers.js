/*
 * Component imports
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Sections";
import CareersHeader from "../components/Sections/Careers/CareersHeader";

/*
 * Component imports
 */

import CareersImage from "../public/images/careers.png";
import JobPostingList from "../components/JobPostingList";

const Careers = () => {
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
        <Section>
          <img
            alt="Ignium Digital careers meeting"
            src={CareersImage}
            style={{
              objectFit: "cover",
              height: "19rem",
              width: "100%",
            }}
          />
        </Section>
        <Section>
          <JobPostingList />
        </Section>
      </Layout>
    </div>
  );
};

export default Careers;
