/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Section";
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
import JavascriptLogo from "../public/images/Technologies/javascript.png";

const About = () => {
	const description = `I am a student at Oregon State University studying Computer Science, with a focus on Web and Mobile development. 
	I have years of experience in developing React and have a strong interest in web development in general. 
	I am a Contentful Certified Professional, have built numerous REST APIs that include Authentication, Authorization, Redis, RabbitMq, and other great features. I absolutely love full stack development but at the moment I would say front end is my specialty.`;

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
						description="I love learning and the fact that web development is constantly advancing, so there is always a need to keep up."
					>
						<ImageCard
							title="React"
							image={ReactLogo}
							content="Whether it be on Mobile or Web, React is an incredible JS library that will speed up your development."
						/>
						<ImageCard
							title="Node"
							image={NodeLogo}
							content="Using this backend runtime environment will let you utilize frameworks such as Express.js to quickly scaffold a server and build a REST API."
						/>
						<ImageCard
							title="Contentful"
							image={ContentfulLogo}
							content="The sweet spot where price meets quality. A CMS with ease of use and a price point that is hard to beat. Since most of the time, the free tier is enough."
						/>
						<ImageCard
							title="Javascript"
							image={JavascriptLogo}
							content="Yeah, React is a Javascript library but it's nice to have those vanilla JS skills."
						/>
					</TitleDescriptionAndTiles>
				</Section>
				<div className="blue--background" style={{ padding: "5.75rem 0" }}>
					<Section>
						<h2 style={{ color: "white" }}>Professional Experience</h2>
						{/* <p style={{ color: "white", opacity: 1 }}>
							I thrive off providing businesses the
							products that they need at the highest
							quality.
						</p> */}
						<br />
						<GridContainer>
							<ImageCard
								alt="ConnectiveDX logo"
								title="ConnectiveDX"
								content="Software Engineer Intern"
								image={Connective}
								white={true}
							/>
							<ImageCard
								alt="Oregon State University logo"
								title="Oregon State University"
								content="Student Software Developer"
								image={OSU}
								white={true}
							/>
							<ImageCard
								alt="Ignium Digital Logo"
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
