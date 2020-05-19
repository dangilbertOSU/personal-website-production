/*
 * Component imports
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Sections";
import GridContainer from "../components/GridContainer";
import Card from "../components/Card";

/*
 * Image/SVG imports
 */

import AuditIcon from "../components/SVG/services/AuditIcon";
import ConversationIcon from "../components/SVG/services/ConversationIcon";
import CustomDevIcon from "../components/SVG/services/CustomDevIcon";
import InfanstructureIcon from "../components/SVG/services/InfanstructureIcon";
import MarketingIcon from "../components/SVG/services/MarketingIcon";
import TeamAugIcon from "../components/SVG/services/TeamAugIcon";
import TrainingIcon from "../components/SVG/services/TrainingIcon";
import UpgradeIcon from "../components/SVG/services/UpgradeIcon";
import ServicesHeader from "../components/Sections/Services/ServicesHeader";

const Services = (props) => {
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
        <ServicesHeader />
        <Section>
          <GridContainer title="Sitecore Technology">
            <Card title="Training" Icon={() => <TrainingIcon />}>
              Our Founder, Dylan Young, is well known in the Sitecore community,
              for providing high level Sitecore and related training. We can
              visit your offices and provide targetted training for the needs of
              your organization.
            </Card>
            <Card title="Marketing Enablement" Icon={() => <MarketingIcon />}>
              Are you getting the most value out of your investment with
              Sitecore? We can help you to develop a plan with your team or
              without your team, to start utilizing the key marketing features
              of the Sitecore Experience Platform.
            </Card>
            <Card title="Team Augmentation" Icon={() => <TeamAugIcon />}>
              We can provide on-site or virtual technical team members at
              various skill levels to increase the velocity of your team, while
              also helping to increase the knowledge of your team.
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
              help you to architect and build a conversational dialog
              application that can help your organization reach new customers.
            </Card>
          </GridContainer>
          <GridContainer title="Other services">
            <Card title="Sitecore Upgrades" Icon={() => <UpgradeIcon />}>
              Are you running on an older version of Sitecore? Use our
              experienced team to help you upgrade to the latest stable version
              of Sitecore.
            </Card>
            <Card
              title="Azure Infrastructure"
              Icon={() => <InfanstructureIcon />}
            >
              We are experienced with Sitecore Azure Infrastructure, including
              setup using ARM Templates, and continuous deployment using Azure
              DevOps and Blue/Green Deployments. We can also help you maintain
              your existing IaaS or PaaS infrastructure.
            </Card>
            <Card title="Sitecore Audit" Icon={() => <AuditIcon />}>
              Not sure where your implementation stands in terms of Best
              Practices? Allow our multi-faceted inspection of your Sitecore
              implementation to tell you exactly where your setup falls short
              and steps that can be taken to get it where it needs to be, for
              upgrades and better architecture.
            </Card>
          </GridContainer>
        </Section>
      </Layout>
    </div>
  );
};

export default Services;
