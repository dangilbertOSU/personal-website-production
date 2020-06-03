/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Article from "../Article";

/*
 * CSS imports
 */

import "./ArticleGrid.css";

const ArticleGrid = (props) => {
	const { articles, className } = props;

	return (
		<div className={className}>
			{articles &&
				articles.map((article, index) => (
					<Article
						article={article}
						content={index === 0 ? article.content : null}
						index={index}
						key={article.id}
					/>
				))}
		</div>
	);
};

ArticleGrid.defaultProps = {
	articles: [],
	className: "articles__grid",
};

ArticleGrid.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.object),
	className: PropTypes.string,
};

export default ArticleGrid;
