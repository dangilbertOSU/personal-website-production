import Head from "next/head";

/*
 * Image Imports
 */

import OfficeStock from "../public/images/Stock/office-stock.jpg";
import DannonAtBeach from "../public/images/Dannon/DannonAtBeach.jpg";
import ContentfulCert from "../public/images/Dannon/contentful_cert.png";

/*
 * Component Imports
 */

import Layout from "../components/Layout";
import Section from "../components/Section";
import SitewideHeroImage from "../components/SitewideHeroImage";
import HeaderTextImage from "../components/HeaderTextImage";
import TitleDescriptionCTA from "../components/TitleDescriptionCTA";

const App = ({ featuredArticles }) => {
	return (
		<div>
			<Head>
				<title>DG | Home</title>
				<meta
					name="keywords"
					content="resume,react,node,express,javascript,developer,software,engineer"
				/>
				<meta
					name="description"
					content="I specialize in full stack development with years of experience in React. "
				/>
			</Head>
			<Layout>
				<SitewideHeroImage backgroundImage={OfficeStock}>
					<Section>
						<TitleDescriptionCTA
							title="Dannon Gilbert"
							description="Software Engineer"
							buttonAriaLabel="Go to about me page"
							buttonText="About Me"
							link="/about"
						/>
					</Section>
				</SitewideHeroImage>
				<Section>
					<HeaderTextImage
						header="A Focus on Mobile and Web Development"
						image={DannonAtBeach}
						orientation="regular"
					>
						<p>
							I have industry experience developing full
							stack web apps for businesses that have
							included architecting databases utilizing
							MongoDB and SQL, designing in Figma, React,
							Node/Express, and I am absolutely no stranger
							to just regular Vanilla JS and CSS.
						</p>
						<p>
							My focus at Oregon State University is Web
							and Mobile Development. I have developed
							mobile applications with groups in Android
							Studio. I have since been learning React
							native.
						</p>
					</HeaderTextImage>
				</Section>
				<Section>
					<HeaderTextImage
						header="A Certified Contentful Professional"
						image={ContentfulCert}
						orientation="flipped"
					>
						<p>
							Certifications don't mean much honestly. But
							it's a nice little thing to show that I have
							had some experience using a CMS and actually
							the content on this website is coming from
							Contentful!
						</p>
					</HeaderTextImage>
				</Section>
			</Layout>
		</div>
	);
};

export default App;
