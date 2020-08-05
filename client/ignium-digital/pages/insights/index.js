/*
 * Function Imports
 */

import { useState } from "react";
import fetch from "isomorphic-unfetch";

/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../../components/Layout";
import Section from "../../components/Sections";
import SectionHeading from "../../components/SectionHeading";
import ArticleTab from "../../components/ArticleTab";
import ArticleGrid from "../../components/ArticleGrid";
import ArticleLayout from "../../components/ArticleLayout";
import Article from "../../components/Article";
import Button from "../../components/Button";

const Insights = ({ featuredArticles, nonFeaturedArticles }) => {
	const [active, setActive] = useState(0);
	const [shownAmount, setShownAmount] = useState(9);

	const getFilteredArticles = (amount, filter, articles) => {
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
				return getFilteredArticles(5, null, featuredArticles);
			case 1:
				return getFilteredArticles(
					5,
					"technology",
					featuredArticles
				);
			case 2:
				return getFilteredArticles(
					5,
					"motivation",
					featuredArticles
				);
			case 3:
				return getFilteredArticles(5, "business", featuredArticles);
		}
	};

	const shownFeaturedArticles = getFeaturedArticles(active);

	return (
		<div>
			<Head>
				<title>Ignium Digital | Insights</title>
				<meta
					name="description"
					content="Everything you need to know about sitecore technology, customer experience & beyond. Articles with categories in technology, motivation, and business."
				/>
			</Head>
			<Layout contact={false}>
				<Section>
					<div style={{ marginTop: "4rem" }}>
						<SectionHeading
							header="Everything you need to know about sitecore technology, customer experience & beyond"
							tab="Insights"
						/>
					</div>
					<ArticleTab active={active} setActive={setActive} />
					<ArticleGrid articles={shownFeaturedArticles} />
				</Section>
				<Section>
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
														article
													}
													index={index}
													key={
														article.id
													}
													photoURL={`http://localhost:1337${article.coverPhoto.url}`}
												/>
											);
										})}
							</ArticleLayout>
							<div className="insights__show--buton--area">
								{shownAmount <
									nonFeaturedArticles.length && (
									<Button
										ariaLabel="show more"
										variant="secondary"
										onClick={() =>
											setShownAmount(
												shownAmount + 3
											)
										}
									>
										Load More
									</Button>
								)}
							</div>
						</React.Fragment>
					)}
				</Section>
			</Layout>
		</div>
	);
};

Insights.defaultProps = {
	featuredArticles: [],
	nonFeaturedArticles: [],
};

/*
 * get the featured and non-featured articles
 */

export async function getServerSideProps() {
	try {
		const { API_URL, API_PORT } = process.env;

		/*
		 * Fetching featured articles, five from each category and then
		 * all of the non featured articles
		 */

		const [featuredArticles, nonFeaturedArticles] = await Promise.all([
			fetch(
				`${API_URL}:${API_PORT}/articles?_limit=5&featured=true&_sort=date:DESC`
			).then((r) => r.json()),
			fetch(
				`${API_URL}:${API_PORT}/articles?featured=false&_sort=date:DESC`
			).then((r) => r.json()),
		]);

		return {
			props: {
				featuredArticles,
				nonFeaturedArticles,
			},
		};
	} catch (err) {
		return {
			props: {},
		};
	}
}

export default Insights;
