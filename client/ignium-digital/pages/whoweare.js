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

import CompanyImage1 from "../public/images/WhoWeAre/company1.png";
import CompanyImage2 from "../public/images/WhoWeAre/company2.png";
import CompanyImage3 from "../public/images/services_header.png";
import DylanBiographyPhoto from "../public/images/dylan_biography.jpg";
import Biography from "../components/Biography";

const WhoWeAre = (props) => {
	return (
		<div>
			<Head>
				<title>Ignium Digital | Insights</title>
				<meta name="description" content="" />
			</Head>
			<Layout>
				<Section>
					<WhoWeAreHeader />
				</Section>
				<div
					className="blue--background"
					style={{ padding: "5.75rem 0" }}
				>
					<Section>
						<h2>Companies trust us</h2>
						<p>
							Our team delivers custom-built solutions and
							meets your needs. With us you will be one
							step ahead of your competitors.
						</p>
						<br />
						<GridContainer>
							<ImageCard
								title="Use case number one"
								content="Caribtrans"
								image={CompanyImage1}
							/>
							<ImageCard
								title="Use case number two"
								content="Microsoft"
								image={CompanyImage2}
							/>
							<ImageCard
								title="Use case number three"
								content="Caribtrans"
								image={CompanyImage3}
							/>
						</GridContainer>
					</Section>
				</div>
				<Section>
					<Biography
						name="Dylan Young"
						jobTitle="Sitecore MVP"
						description="Dylan Young, is well known in the Sitecore community, for providing high level Sitecore and related training. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
						twitterLink="https://twitter.com/sitecore_master?s=20"
						githubLink="https://github.com/sitecoremaster"
						youtubeLink="https://www.youtube.com/channel/UC5krmrALirwZibfW9-c2JXw"
						biographyPicture={DylanBiographyPhoto}
					/>
				</Section>
			</Layout>
		</div>
	);
};

export default WhoWeAre;
