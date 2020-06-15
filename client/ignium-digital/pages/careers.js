/*
 * Function Imports
 */

import fetch from "isomorphic-unfetch";

/*
 * Component imports
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Sections";
import CareersHeader from "../components/Sections/Careers/CareersHeader";
import JobPostingList from "../components/JobPostingList";

/*
 * Image/SVG imports
 */

import CareersImage from "../public/images/careers.png";

const Careers = ({ careers }) => {
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
					<JobPostingList careers={careers} />
				</Section>
			</Layout>
		</div>
	);
};

/*
 * Fetch the list of job openings
 */

export async function getServerSideProps() {
	const { API_URL, API_PORT } = process.env;

	const result = await fetch(
		`${API_URL}:${API_PORT}/careers?_sort=updated_at:DESC`
	);
	const data = await result.json();

	return {
		props: {
			careers: data,
		},
	};
}

export default Careers;
