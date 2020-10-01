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
				{/* <Section>
					{nonFeaturedArticles.length > 0 && (
						<React.Fragment>
							<h2>Latest articles</h2>
							<ArticleLayout>
								{nonFeaturedArticles &&
									nonFeaturedArticles
										.slice(0, shownAmount)
										.map((article, index) => {
											return (
												<Article
													article={
														article.fields
													}
													id={
														article
															.sys
															.id
													}
													index={index}
													key={
														article
															.sys
															.id
													}
												/>
											);
										})}
							</ArticleLayout>
						</React.Fragment>
					)}
				</Section> */}
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
		const entries = await fetchBlogs();

		/*
		 * Fetching featured articles, five from each category and then
		 * all of the non featured articles
		 */

		const blogs = entries.slice(0, 5);

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
