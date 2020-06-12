/*
 * Function Imports
 */

import { useState } from "react";
import fetch from "isomorphic-unfetch";

/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../components/Layout";
import Section from "../components/Sections";
import SectionHeading from "../components/SectionHeading";
import ArticleTab from "../components/ArticleTab";
import ArticleGrid from "../components/ArticleGrid";
import ArticleLayout from "../components/ArticleLayout";
import Article from "../components/Article";

/*
 * Image/SVG imports
 */

import photo1 from "../public/images/Articles/article1.png";
import photo2 from "../public/images/Articles/article2.jpg";
import photo3 from "../public/images/Articles/article3.jpg";
import photo4 from "../public/images/Articles/article4.jpg";
import photo5 from "../public/images/Articles/article5.jpg";

const Insights = ({ articles, API_URL, API_PORT }) => {
	const [active, setActive] = useState(0);

	const getFilteredArticles = (amount, filter) => {
		const filtered = articles.filter(
			function (article) {
				if (
					(this.count < amount && article.category == filter) ||
					(this.count < amount && !filter)
				) {
					this.count++;
					return true;
				}
				return false;
			},
			{ count: 0 }
		);

		return filtered;
	};

	const getFeaturedArticles = (tabIndex) => {
		switch (tabIndex) {
			case 0:
				return getFilteredArticles(5);
			case 1:
				return getFilteredArticles(5, "technology");
			case 2:
				return getFilteredArticles(5, "motivation");
			case 3:
				return getFilteredArticles(5, "business");
		}
	};

	const featuredArticles = getFeaturedArticles(active);
	const latestArticles = getFilteredArticles(9);

	return (
		<div>
			<Head>
				<title>Ignium Digital | Insights</title>
				<meta
					name="description"
					content="Everything you need to know about sitecore technology, customer experience & beyond. Articles with categories in technology, motivation, and business."
				/>
			</Head>
			<Layout>
				<Section>
					<div style={{ marginTop: "4rem" }}>
						<SectionHeading
							header="Everything you need to know about sitecore technology, customer experience & beyond"
							tab="Insights"
						/>
					</div>
					<ArticleTab active={active} setActive={setActive} />
					<ArticleGrid articles={featuredArticles} />
				</Section>
				<Section>
					<h2>Latest articles</h2>
					<ArticleLayout>
						{latestArticles &&
							latestArticles.map((article, index) => {
								console.log("latest", article);
								return (
									<Article
										article={article}
										index={index}
										key={article.id}
										photoURL={`http://localhost:1337${article.coverPhoto.url}`}
									/>
								);
							})}
					</ArticleLayout>
				</Section>
			</Layout>
		</div>
	);
};

export async function getServerSideProps() {
	const { API_URL, API_PORT } = process.env;
	const result = await fetch(
		`${API_URL}:${API_PORT}/articles?_sort=date:DESC`
	);
	const data = await result.json();

	return {
		props: {
			articles: data,
			API_URL,
			API_PORT,
		},
	};
}

export default Insights;
