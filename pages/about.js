/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Sections";
import TitleDescriptionAndTiles from "../components/TitleDescriptionAndTiles";
import GridContainer from "../components/GridContainer";
import ImageCard from "../components/ImageCard";

/*
 * Image/SVG imports
 */

import Biography from "../components/Biography";
import Connective from "../public/images/Experiences/connective.png";
import ContentfulLogo from "../public/images/Technologies/contentful.png";
import DannonBiographyPhoto from "../public/images/Dannon/DannonBiography.jpg";
import Ignium from "../public/images/Experiences/ignium.png";
import NodeLogo from "../public/images/Technologies/node.png";
import OSU from "../public/images/Experiences/osu.png";
import ReactLogo from "../public/images/Technologies/react.png";
import SitecoreLogo from "../public/images/Technologies/sitecore.png";

const About = () => {
	const description = `I am a student at Oregon State University studying Computer Science, with a focus on Web and Mobile development. 
	I have years of experience in developing React and have a strong interest in web development technologies, like bundlers and transpilers. 
	I am a Contentful Certified Professional and have built numerous REST APIs. Full Stack development is my specialty and I absolutely love the work I do.`;

	return (
		<div>
			<Head>
				<title>DG | About</title>
				<meta
					name="description"
					content="I am a student at Oregon State University studying Computer Science, with a focus on Web and Mobile development. I will develop in React, Node, Express, MongoDB, MySQL."
				/>
			</Head>
			<Layout>
				<Section>
					<Biography
						name="Dannon Gilbert"
						jobTitle="Software Engineer"
						description={description}
						githubLink="https://github.com/dangilbertOSU"
						youtubeLink="https://www.youtube.com/channel/UCAI3kqkRenwgOP2oN0GbOaA"
						linkedInLink="https://www.linkedin.com/in/dannon-gilbert-19705371/"
						biographyPicture={DannonBiographyPhoto}
						alt="Dannon Gilbert headshot"
					/>
				</Section>
				<Section>
					<TitleDescriptionAndTiles
						title="I use modern web development technologies to help you build your application faster and better"
						description="I love learning the latest technologies and applying them to fit the needs of businesses."
					>
						<ImageCard
							title="React"
							image={ReactLogo}
							content="Whether it be on Mobile or Web, React is an incredible JS library that will speed up your development."
						/>
						<ImageCard
							title="Node"
							image={NodeLogo}
							content="Using this backend runtime environment will let you utilize frameworks such as Express.js."
						/>
						<ImageCard
							title="Sitecore"
							image={SitecoreLogo}
							content="A dominating CMS platform that can provide your business with the tools needed to enhance your digital reach."
						/>
						<ImageCard
							title="Contentful"
							image={ContentfulLogo}
							content="The sweet spot where price meets quality. A CMS with ease of use and a price point that is hard to beat."
						/>
					</TitleDescriptionAndTiles>
				</Section>
				<div
					className="blue--background"
					style={{ padding: "5.75rem 0" }}
				>
					<Section>
						<h2 style={{ color: "white" }}>Experience</h2>
						<p style={{ color: "white", opacity: 1 }}>
							I thrive off providing businesses the
							products that they need at the highest
							quality.
						</p>
						<br />
						<GridContainer>
							<ImageCard
								alt="temporary case photo 1"
								title="ConnectiveDX"
								content="Software Engineer Intern"
								image={Connective}
								white={true}
							/>
							<ImageCard
								alt="temporary case photo 2"
								title="Oregon State University"
								content="Student Software Developer"
								image={OSU}
								white={true}
							/>
							<ImageCard
								alt="temporary case photo 3"
								title="Ignium Digital"
								content="Junior Software Engineer"
								image={Ignium}
								white={true}
							/>
						</GridContainer>
					</Section>
				</div>
			</Layout>
		</div>
	);
};

export default About;
