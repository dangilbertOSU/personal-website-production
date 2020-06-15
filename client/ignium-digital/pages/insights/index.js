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
			<Layout>
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
								nonFeaturedArticles.length ? (
									<Button
										ariaLabel="show more"
										variant="secondary"
										onClick={() =>
											setShownAmount(
												shownAmount + 3
											)
										}
									>
										Show More
									</Button>
								) : (
									<Button
										ariaLabel="show less"
										variant="secondary"
										onClick={() =>
											setShownAmount(
												shownAmount - 3
											)
										}
									>
										Show Less
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

/*
 * get the featured and non-featured articles
 */

export async function getServerSideProps() {
	const { API_URL, API_PORT } = process.env;

	/*
	 * Fetching 15 featured articles
	 */

	const featuredResult = await fetch(
		`${API_URL}:${API_PORT}/articles?_limit=15&featured=true&_sort=date:DESC`
	);
	const featuredArticles = await featuredResult.json();

	/*
	 * Geting the rest of the non-featured articles
	 */

	const nonFeaturedResult = await fetch(
		`${API_URL}:${API_PORT}/articles?_limit=30&featured=false&_sort=date:DESC`
	);
	const nonFeaturedArticles = await nonFeaturedResult.json();

	return {
		props: {
			featuredArticles,
			nonFeaturedArticles,
		},
	};
}

export default Insights;
