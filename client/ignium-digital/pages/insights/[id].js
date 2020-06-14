/*
 * Function Imports
 */

import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

/*
 * Component Imports
 */

import Layout from "../../components/Layout";
import Section from "../../components/Sections";
import ReactMarkdown from "react-markdown";
import ArticleLayout from "../../components/ArticleLayout";
import Article from "../../components/Article";

/*
 * Image/SVG Imports
 */
import TextSeperator from "../../components/SVG/TextSeperator";
import TwitterLogo from "../../components/SVG/social/TwitterLogo";
import LinkedInLogo from "../../components/SVG/social/LinkedInLogo";
import EmailLogo from "../../components/SVG/social/EmailLogo";

/*
 * CSS Imports
 */

import "./insight.css";

const dateFormatter = (date) => {
	const dateArray = date.split("-");
	const months = [
		"Jan",
		"Feb",
		"March",
		"April",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dev",
	];
	const year = dateArray[0];
	const month = parseInt(dateArray[1]);
	const day = dateArray[2];

	return `${day} ${months[month + 1]} ${year}`;
};

const Insight = (props) => {
	const { article, className, nextArticles } = props;
	return (
		<Layout contact={false}>
			<Section>
				<div className={className}>
					<div className={`${className}__body`}>
						<div className={`${className}__data`}>
							<p
								className={`${className}__category ${article.category}`}
							>
								{article.category}
							</p>
							<TextSeperator />
							<p>{dateFormatter(article.date)}</p>
						</div>
						<h1 className={`${className}__title`}>
							{article.title}
						</h1>
						<div className={`${className}__social`}>
							{article.twitter ||
							article.linkedin ||
							article.email ? (
								<p>Share with:</p>
							) : null}
							{article.twitter && <TwitterLogo />}
							{article.linkedin && <LinkedInLogo />}
							{article.email && <EmailLogo />}
						</div>
					</div>
					<div className={`${className}__cover--photo`}>
						<img
							src={`http://localhost:1337${article.coverPhoto.url}`}
						/>
					</div>
					<div className={`${className}__body`}>
						<ReactMarkdown source={article.content} />
					</div>
				</div>
			</Section>
			<Section>
				<h2>Next articles</h2>
				<ArticleLayout>
					{nextArticles &&
						nextArticles.map((nextArticle, index) => {
							return (
								<Article
									article={nextArticle}
									index={index}
									key={nextArticle.id}
									photoURL={`http://localhost:1337${nextArticle.coverPhoto.url}`}
								/>
							);
						})}
				</ArticleLayout>
			</Section>
		</Layout>
	);
};

Insight.defaultProps = {
	className: "insight",
};

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
	const { id } = context.query;
	const { API_URL, API_PORT } = publicRuntimeConfig;

	/*
	 * Fetching article data by ID
	 */

	const result = await fetch(`${API_URL}:${API_PORT}/articles/${id}`);
	const data = await result.json();

	/*
	 * Fetching next 3 articles in same category
	 */

	const nextArticlesResult = await fetch(
		`${API_URL}:${API_PORT}/articles?_limit=3&category=${data.category}`
	);
	const nextArticles = await nextArticlesResult.json();

	return {
		props: {
			article: data,
			nextArticles,
		},
	};
}

export default Insight;
