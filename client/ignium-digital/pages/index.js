/*
 * Function imports
 */

import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

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

const App = ({ featuredArticles }) => {
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
					<InsightsSection articles={featuredArticles} />
				</Section>
			</Layout>
		</div>
	);
};

const { publicRuntimeConfig } = getConfig();

/*
 * Getting the latest 5 featured articles
 */

export async function getServerSideProps() {
	try {
		const { API_URL, API_PORT } = publicRuntimeConfig;
		const result = await fetch(
			`${API_URL}:${API_PORT}/articles?_limit=5&featured=true&_sort=date:DESC`
		);
		const data = await result.json();

		return {
			props: {
				featuredArticles: data,
			},
		};
	} catch (err) {
		return {
			props: {},
		};
	}
}

export default App;
