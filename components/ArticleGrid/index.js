/*
 * Function imports
 */

import PropTypes from "prop-types";
import getConfig from "next/config";

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
	const { publicRuntimeConfig } = getConfig();
	const { API_PORT } = publicRuntimeConfig;

	return (
		<div className={className}>
			{articles
				&& articles.map((article, index) => {
					return (
						<Article
							article={article.fields}
							id={article.sys.id}
							index={index}
							key={article.sys.id}
						/>
					);
				})}
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