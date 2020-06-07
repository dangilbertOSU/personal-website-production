/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Link from "next/link";

/*
 * Image/SVG imports
 */

import TextSeperator from "../SVG/TextSeperator";

/*
 * CSS imports
 */

import "./Article.css";

const Article = (props) => {
	const {
		article, className, content, index,
	} = props;

	return (
		<div className={`${className} article_${index}`}>
			<Link href={`/insights/${article.id}`}>
				<a>
					<div className={`${className}__image`}>
						<img
							src={article.image}
							alt={article.alt || `${article.title}_image`}
						/>
					</div>
				</a>
			</Link>
			<div className={`${className}__data`}>
				<p className={`${className}__category ${article.category}`}>
					{article.category}
				</p>
				<TextSeperator />
				<p>{article.publish_date}</p>
			</div>
			<Link href={`/insights/${article.id}`}>
				<a>
					<h3>{article.title}</h3>
				</a>
			</Link>
			{content && <p>{`${content.substring(0, 327)}...`}</p>}
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
};

export default Article;
