/*
 * Function Imports
 */

import Head from "next/head";
import { useFetchBlogs } from "../../utilities/dataServices";

/*
 * Component Imports
 */

import Layout from "../../components/Layout";
import Section from "../../components/Section";
import SectionHeading from "../../components/SectionHeading";
import ArticleGrid from "../../components/ArticleGrid";

const Blogs = () => {
	const blogs = useFetchBlogs();

	return (
		<div>
			<Head>
				<title>DG | Blogs</title>
			</Head>
			<Layout contact={false}>
				<Section>
					<div style={{ marginTop: "4rem" }}>
						<SectionHeading header="Latest Blogs" />
					</div>
					<ArticleGrid articles={blogs} />
				</Section>
			</Layout>
		</div>
	);
};

export default Blogs;
