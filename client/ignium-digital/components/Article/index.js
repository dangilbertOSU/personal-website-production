/*
 * Component imports
 */

import ReactMarkdown from "react-markdown";

/*
 * Function imports
 */

import PropTypes from "prop-types";
import Link from "next/link";
import { dateFormatter } from "../../utilities/utilities";

/*
 * CSS imports
 */

import "./Article.css";

const Article = (props) => {
	const { article, className, id, index } = props;

	const { coverPhoto, content, publishedDate, title } = article;

	const date = new Date(publishedDate);
	const publishedDateString = date.toDateString();

	return (
		<div className={`${className} article_${index}`}>
			<Link href="/blogs/[id]" as={`/blogs/${id}`}>
				<a>
					<div className={`${className}__image`}>
						<img
							src={"https:" + coverPhoto.fields.file.url}
							alt={
								coverPhoto.fields.description ||
								`${title} cover photo`
							}
						/>
					</div>
				</a>
			</Link>

			<div className={`${className}__data`}>
				<p>{dateFormatter(publishedDateString)}</p>
			</div>
			<Link href="/blogs/[id]" as={`/blogs/${id}`}>
				<a>
					<h3>{article.title}</h3>
				</a>
			</Link>
			{/*
			<div className={`${className}__content`}>
				{content && (
					<ReactMarkdown>{`${content.substring(
						0,
						327
					)}...`}</ReactMarkdown>
				)}
			</div> */}
		</div>
	);
};

Article.defaultProps = {
	className: "article",
	content: null,
};

Article.propTypes = {
	article: PropTypes.oneOfType([PropTypes.object]).isRequired,
	className: PropTypes.string,
	index: PropTypes.number.isRequired,
};

export default Article;
