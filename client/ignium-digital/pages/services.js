/*
 * Component Imports
 */

import Card from "../components/Card";
import Head from "next/head";
import Layout from "../components/Layout";
import GridContainer from "../components/Container/Global/Grid";

/*
 * Import SVGs
 */

import ConversationIcon from "../components/SVG/services/ConversationIcon";
import CustomDevIcon from "../components/SVG/services/CustomDevIcon";
import MarketingIcon from "../components/SVG/services/MarketingIcon";
import TeamAugIcon from "../components/SVG/services/TeamAugIcon";
import TrainingIcon from "../components/SVG/services/TrainingIcon";

const App = (props) => {
  return (
    <div>
      <Head>
        <title>Ignium Digital | Services</title>
        <meta
          name="description"
          content="Let us help steer your organization in the right direction. We offer a wide range of Sitecore tailored solutions, to help your organization to get the most of your Sitecore investment."
        />
      </Head>
      <Layout>
        <GridContainer title="Sitecore Technology">
          <Card title="Training" Icon={() => <TrainingIcon />}>
            Our Founder, Dylan Young, is well known in the Sitecore community,
            for providing high level Sitecore and related training. We can visit
            your offices and provide targetted training for the needs of your
            organization.
          </Card>
          <Card title="Marketing Enablement" Icon={() => <MarketingIcon />}>
            Are you getting the most value out of your investment with Sitecore?
            We can help you to develop a plan with your team or without your
            team, to start utilizing the key marketing features of the Sitecore
            Experience Platform.
          </Card>
          <Card title="Team Augmentation" Icon={() => <TeamAugIcon />}>
            We can provide on-site or virtual technical team members at various
            skill levels to increase the velocity of your team, while also
            helping to increase the knowledge of your team.
          </Card>
          <Card
            title=".Net Custom Development"
            Icon={() => <ConversationIcon />}
          >
            Even though our specialty is Sitecore development, our team has a
            high level of .Net Development skills, which can help you with
            custom projects or custom websites for your organization.
          </Card>
          <Card
            title="Conversational Interfaces"
            Icon={() => <CustomDevIcon />}
          >
            Want to use new channels to reach your customers? Our experts can
            help you to architect and build a conversational dialog application
            that can help your organization reach new customers.
          </Card>
        </GridContainer>
      </Layout>
    </div>
  );
};

export default App;
