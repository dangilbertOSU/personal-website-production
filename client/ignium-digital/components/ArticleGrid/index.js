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
	articles: PropTypes.array,
	className: PropTypes.string,
};

export default ArticleGrid;
