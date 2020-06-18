/*
 * Function Imports
 */

import dynamic from "next/dynamic";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { dateFormatter } from "../../utilities/utilities";

/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../../components/Layout";
import Section from "../../components/Sections";
import ReactMarkdown from "react-markdown";
import ArticleLayout from "../../components/ArticleLayout";
import Article from "../../components/Article";
import {
	TwitterShareButton,
	LinkedinShareButton,
	EmailShareButton,
} from "react-share";

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

const Insight = (props) => {
	const { article, className, nextArticles } = props;
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Ignium Digital | Insights</title>
				<meta
					name="description"
					content={article.content.substring(0, 25)}
				/>
			</Head>
			<Layout contact={false}>
				<Section>
					<div className={className} id="capture">
						<div className={`${className}__body`}>
							<span className="insight__tab">
								<span className="insight__tab__line" />
								<h4>INSIGHTS</h4>
							</span>
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
								<p>Share with:</p>
								<TwitterShareButton
									url={`https://www.igniumdigital.com${router.asPath}`}
									title="Check out this article:"
									via="igniumdigital"
								>
									<TwitterLogo />
								</TwitterShareButton>
								<LinkedinShareButton
									url={`https://www.igniumdigital.com${router.asPath}`}
									title="Check out this article:"
									summary="Summary here"
									source="www.igniumdigital.com"
								>
									<LinkedInLogo />
								</LinkedinShareButton>
								<EmailShareButton
									url={`https://www.igniumdigital.com${router.asPath}`}
									subject="Look at this Ignium Digital Article"
									body="Here's a link:"
								>
									<EmailLogo />
								</EmailShareButton>
							</div>
						</div>
						<div className={`${className}__cover--photo`}>
							<img
								src={`http://localhost:1337${article.coverPhoto.url}`}
								alt={
									article.coverPhoto
										.alternativeText ||
									`${article.title} cover photo`
								}
							/>
						</div>
						<div className={`${className}__body`}>
							<ReactMarkdown source={article.content} />
						</div>
					</div>
				</Section>
				<Section>
					{nextArticles.length > 0 && <h2>Next articles</h2>}
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
		</div>
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
