/*
 * Function Imports
 */

import { fetchBlogs } from "../../utilities/utilities";

/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../../components/Layout";
import Section from "../../components/Sections";
import SectionHeading from "../../components/SectionHeading";
import ArticleGrid from "../../components/ArticleGrid";

const Blogs = ({ blogs }) => {

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

Blogs.defaultProps = {
	featuredArticles: [],
	nonFeaturedArticles: [],
};

/*
 * Fetch all blogs
 */

export async function getStaticProps() {
	try {
		const blogs = await fetchBlogs();

		return {
			props: {
				blogs,
			},
		};
	} catch (err) {
		return {
			props: {},
		};
	}
}

export default Blogs;
