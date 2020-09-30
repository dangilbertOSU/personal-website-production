/*
 * Component imports
 */

import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Sections";

/*
 * Image/SVG imports
 */

const Contact = () => {
	return (
		<div>
			<Head>
				<title>DG | Contact</title>
				<meta
					name="description"
					content="Let us help steer your organization in the right direction. We offer a wide range of Sitecore tailored solutions, to help your organization to get the most of your Sitecore investment."
				/>
			</Head>
			<Layout>
				<Section>
					<SectionHeading header="Contact me" />
					<ContactForm />
				</Section>
			</Layout>
		</div>
	);
};

export default Contact;
