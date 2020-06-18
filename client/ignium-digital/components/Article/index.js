/*
 * Function imports
 */

import PropTypes from "prop-types";
import Link from "next/link";
import { dateFormatter } from "../../utilities/utilities";

/*
 * Component imports
 */

import ReactMarkdown from "react-markdown";

/*
 * Image/SVG imports
 */

import TextSeperator from "../SVG/TextSeperator";

/*
 * CSS imports
 */

import "./Article.css";

const Article = (props) => {
	const { article, className, content, index, photoURL } = props;

	return (
		<div className={`${className} article_${index}`}>
			<Link href="/insights/[id]" as={`/insights/${article.id}`}>
				<a>
					<div className={`${className}__image`}>
						<img
							src={photoURL}
							alt={
								article.coverPhoto.alternativeText ||
								`${article.title} cover photo`
							}
						/>
					</div>
				</a>
			</Link>
			<div className={`${className}__data`}>
				<p className={`${className}__category ${article.category}`}>
					{article.category}
				</p>
				<TextSeperator />
				<p>{dateFormatter(article.date)}</p>
			</div>
			<Link href="/insights/[id]" as={`/insights/${article.id}`}>
				<a>
					<h3>{article.title}</h3>
				</a>
			</Link>
			<div className={`${className}__content`}>
				{content && (
					<ReactMarkdown>{`${content.substring(
						0,
						327
					)}...`}</ReactMarkdown>
				)}
			</div>
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
	content: PropTypes.string,
	index: PropTypes.number.isRequired,
	photoURL: PropTypes.string.isRequired,
};

export default Article;
