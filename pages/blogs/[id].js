/*
 * Function Imports
 */

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { dateFormatter } from "../../utilities/utilities";
import { fetchBlogs, fetchSpecificBlog } from "../../utilities/utilities";

/*
 * Component Imports
 */

import Head from "next/head";
import Layout from "../../components/Layout";
import Section from "../../components/Sections";

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

const Blog = (props) => {
     const { className, post } = props;
     const { title, coverPhoto, content, publishedDate } = post.fields;
     const date = new Date(publishedDate);
	const publishedDateString = dateFormatter(date.toDateString());
	const { id } = post.sys;

	return (
		<div>
			<Head>
				<title>Dannon Gilbert | Blog</title>
				<meta
					name="description"
					// content={article.content.substring(0, 25)}
				/>
			</Head>
			<Layout contact={false}>
				<Section>
					<div className={className} id="capture">
						<div className={`${className}__body`}>
							<h1 className={`${className}__title`}>
								{title}
							</h1>
							<div className={`${className}__social`}>
								<p>Share with:</p>
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
						<div className={`${className}__cover--photo`}>
                                   <img
                                        src={`https:${coverPhoto.fields.file.url}`}
                                        alt={
                                             coverPhoto.fields.description
                                             || `${title} cover photo`
                                        }
                                   />
						</div>
						<div className={`${className}__data`}>
								<p>{publishedDateString}</p>
							</div>
						{documentToReactComponents(content)}
					</div>
				</Section>
			</Layout>
		</div>
	);
};

Blog.defaultProps = {
	className: "blog",
};

export async function getStaticPaths() {
     const response = await fetchBlogs();

     return {
          paths: response.map((post) => {
               return {
                    params: {
                    id: `${post.sys.id}`,
                    },
               }
          }),
          fallback: false,
     }
}

export async function getStaticProps({ params }) {
	const post = await fetchSpecificBlog(params.id);

	return {
		props: {
               post
          }
	};
}

export default Blog;