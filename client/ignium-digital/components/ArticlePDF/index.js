/*
 * Function Imports
 */

import { dateFormatter } from "../../utilities/utilities";

/*
 * Component Imports
 */

import ReactMarkdown from "react-markdown";

/*
 * Image/SVG Imports
 */
import TextSeperator from "../SVG/TextSeperator";

const ArticlePDF = (props) => {
	const { article, className } = props;

	return (
		<div className={className}>
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

				<h1 className={`${className}__title`}>{article.title}</h1>
			</div>
			<div className={`${className}__body`}>
				<ReactMarkdown source={article.content} />
			</div>
		</div>
	);
};

ArticlePDF.defaultProps = {
	className: "article",
};

export default ArticlePDF;
