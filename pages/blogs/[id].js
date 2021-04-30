/*
 * Function Imports
 */

import {
	dateFormatter,
	fetchBlogs,
	fetchSpecificBlog,
} from "../../utilities/utilities";
import { useRouter } from 'next/router'

/*
 * Component Imports
 */

import CodeBlock from "../../components/CodeBlock";
import Head from "next/head";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

import {
	TwitterShareButton,
	LinkedinShareButton,
	EmailShareButton,
} from "react-share";

/*
 * Image/SVG Imports
 */

import TwitterLogo from "../../components/SVG/social/TwitterLogo";
import LinkedInLogo from "../../components/SVG/social/LinkedInLogo";
import EmailLogo from "../../components/SVG/social/EmailLogo";

/*
 * CSS Imports
 */

import "./blog.css";

const ReactMarkdown = require("react-markdown");

const Blog = (props) => {
	const { className, post, error } = props;
	const { title, coverPhoto, content, publishedDate } = post.fields;
	const date = new Date(publishedDate);
	const publishedDateString = dateFormatter(date.toDateString());
	const { id } = post.sys;
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>DG | {title || error}</title>
				<meta name="description" />
			</Head>
			<Layout>
				<Section>
					<button className="go-back-button" onClick={() => router.back()}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white"/>
						</svg>
					</button>
					{error ? (
						<p>{error}</p>
					) : (
						<div className={className} id="capture">
							<div className={`${className}__cover--photo`}>
								<img
									src={`https:${coverPhoto.fields.file.url}`}
									alt={coverPhoto.fields.description || `${title} cover photo`}
								/>
							</div>
							<div className={`${className}__data`}>
								<p>{publishedDateString}</p>
							</div>
							<div className={`${className}__body`}>
								<h1 className={`${className}__title`}>{title}</h1>
							</div>
							<div className={`${className}__content`}>
								<ReactMarkdown
									source={content}
									renderers={{ code: CodeBlock }}
								/>
							</div>
							<div className={`${className}__body`}>
								<div className={`${className}__social`}>
									<TwitterShareButton
										url={`https://www.dannongilbert.com/${id}`}
										title="Check out this blog:"
										via="dannongilbert"
									>
										<TwitterLogo />
									</TwitterShareButton>
									<LinkedinShareButton
										url={`https://www.dannongilbert.com/${id}`}
										title="Check out this blog:"
										summary="Summary here"
										source="www.dannongilbert.com"
									>
										<LinkedInLogo />
									</LinkedinShareButton>
									<EmailShareButton
										url={`https://www.dannongilbert.com/${id}`}
										subject="Look at this blog"
										body="Here's a link:"
									>
										<EmailLogo />
									</EmailShareButton>
								</div>
							</div>
						</div>
					)}
				</Section>
			</Layout>
		</div>
	);
};

Blog.defaultProps = {
	className: "blog",
};

export async function getStaticPaths() {
	try {
		const response = await fetchBlogs();

		return {
			paths: response.map((post) => {
				return {
					params: {
						id: `${post.sys.id}`,
					},
				};
			}),
			fallback: false,
		};
	} catch (err) {
		console.log(err);
	}
}

export async function getStaticProps({ params }) {
	try {
		const post = await fetchSpecificBlog(params.id);

		return {
			props: {
				post,
			},
		};
	} catch (err) {
		return {
			props: {
				error: "Could not load data",
			},
		};
	}
}

export default Blog;
