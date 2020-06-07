/*
 * Function Imports
 */

import { useState } from "react";

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

/*
 * Temporary function to produce dummy articles
 * TODO: Delete this function when implementing calls to backend
 */

const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

const createDummyArticles = () => {
	let id = 0;
	let objects = [];
	let titles = [
		"5 Trends to Include in Your Next Website Redesign",
		"15 Strategies to Improve Your Site Search and Increase your Conversion Rate",
		"The Must-Attend Coveo Impact Sessions for Sitecore Users",
		"Congratulations to the 2019 Sitecore MVPs!",
		"Choosing The Best Audio Player Software For Your Computer",
	];
	let photos = [photo1, photo2, photo3, photo4, photo5];
	let categories = ["technology", "motivation", "business"];
	while (id < 100) {
		let object = {
			id: id++,
			title: titles[getRandomInt(5)],
			content: `Today, Coveo and Sitecore have announced an expanded offering to bring Coveo AI-powered search and recommendations to 
		mid-market customers. This best-in-class offering, previously only available to enterprise-level customers, will enable Sitecore
		customers to build powerful, search-driven experiences with rich personalization djsfkljsdlkfjsfsjdsklfsa`,
			category: categories[getRandomInt(3)],
			publish_date: "23 Jan 2020",
			image: photos[getRandomInt(5)],
		};

		objects.push(object);
	}

	return objects;
};

const dummyArticles = createDummyArticles();

const getFilteredArticles = (amount, filter) => {
	const filtered = dummyArticles.filter(
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

const Insights = () => {
	const [active, setActive] = useState(0);

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
								return (
									<Article
										article={article}
										index={index}
										key={article.id}
									/>
								);
							})}
					</ArticleLayout>
				</Section>
			</Layout>
		</div>
	);
};

export default Insights;
