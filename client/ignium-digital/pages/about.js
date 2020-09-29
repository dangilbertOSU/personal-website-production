/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Sections";
import WhoWeAreHeader from "../components/Sections/WhoWeAre/WhoWeAreHeader";
import GridContainer from "../components/GridContainer";
import ImageCard from "../components/ImageCard";

/*
 * Image/SVG imports
 */

import Connective from "../public/images/Experiences/connective.png";
import OSU from "../public/images/Experiences/osu.png";
import Ignium from "../public/images/Experiences/ignium.png";
import DannonBiographyPhoto from "../public/images/Dannon/DannonBiography.jpg";
import Biography from "../components/Biography";

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
					<WhoWeAreHeader />
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
								title="IgniumDigital"
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
