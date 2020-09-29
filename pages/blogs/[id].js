/*
 * Function Imports
 */

import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import {
	TwitterShareButton,
	LinkedinShareButton,
	EmailShareButton,
} from "react-share";
import { dateFormatter, fetchSpecificBlog } from "../../utilities/utilities";

/*
 * Component Imports
 */

import Layout from "../../components/Layout";
import Section from "../../components/Sections";
import ArticleLayout from "../../components/ArticleLayout";
import Article from "../../components/Article";
import DownloadIcon from "../../components/SVG/DownloadIcon";

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

// import ArticlePDF from "../../components/ArticlePDF";

const Insight = (props) => {
	const { article, className } = props;
	const router = useRouter();


	const { title, coverPhoto, content, publishedDate, category } = article.fields;
	const { id } = article.sys;

	const filename = `${title.split(" ").slice(0, 2).join("_")}.pdf`;

	const date = new Date(publishedDate);
	const publishedDateString = date.toDateString();

	console.log("article here: ", article)

	return (
		<div>
			<h2>hey</h2>
			<Head>
				<title>DG | {title}</title>
			</Head>
			<Layout contact={false}>
				<Section>
					<div className={className} id="capture">
						<div className={`${className}__body`}>
							<div className={`${className}__data`}>
								{/* <p
									className={`${className}__category ${category}`}
								>
									{article.category}
								</p>
								<TextSeperator /> */}
								<p>{dateFormatter(publishedDateString)}</p>
							</div>

							<h1 className={`${className}__title`}>
								{title}
							</h1>
							<div className={`${className}__social`}>
								<p>Share with:</p>
								<TwitterShareButton
									url={`https://www.dannongilbert.com${router.asPath}`}
									title="Check out this Blog:"
									via="DannonGilbert"
								>
									<TwitterLogo />
								</TwitterShareButton>
								<LinkedinShareButton
									url={`https://www.dannongilbert.com${router.asPath}`}
									title="Check out this article:"
									summary="Summary here"
									source="www.dannongilbert.com"
								>
									<LinkedInLogo />
								</LinkedinShareButton>
								<EmailShareButton
									url={`https://www.dannongilbert.com${router.asPath}`}
									subject="Look at this Blog"
									body="Here's a link:"
								>
									<EmailLogo />
								</EmailShareButton>
							</div>
						</div>
						<div className={`${className}__cover--photo`}>
							<img
								src={`https:${coverPhoto.fields.file.url}`}
								alt={
									coverPhoto.fields.description
									|| `${title} cover photo`
								}
							/>
						</div>
						<div className={`${className}__body`}>
							{/* <ReactMarkdown source={article.content} />
							<Link
								href="/insights/download/[id]"
								as={`/insights/download/${article.id}`}
							>
								<div
									className={`${className}__download`}
								>
									<DownloadIcon />
									<p>{filename}</p>
								</div>
							</Link> */}
						</div>
					</div>
				</Section>
				{/* <Section>
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
				</Section> */}
			</Layout>
		</div>
	);
};

Insight.defaultProps = {
	className: "insight",
};

// export async function getStaticPaths() {
// 	return {
// 		paths: [
// 			{ params: { id: "*" } },
// 		],
// 		fallback: true,
// 	};
// }

export async function getServerSideProps(context) {
	const { id } = context.params;
	try {
		const blogItem = await fetchSpecificBlog(id);

		// console.log("Test Result", testResult);

		// /*
		//  * Fetching article data by ID
		//  */

		// const result = await fetch(`${API_URL}:${API_PORT}/articles/${id}`);
		// const data = await result.json();

		// /*
		//  * Fetching next 3 articles in same category
		//  */

		// const nextArticlesResult = await fetch(
		// 	`${API_URL}:${API_PORT}/articles?_limit=3&category=${data.category}`,
		// );
		// const nextArticles = await nextArticlesResult.json();

		return {
			props: {
				article: blogItem,
			},
		};
	} catch (err) {
		return {
			props: {},
		};
	}
}

export default Insight;
