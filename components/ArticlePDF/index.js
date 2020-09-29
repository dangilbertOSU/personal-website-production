/*
 * Function Imports
 */

import ReactMarkdown from "react-markdown";
import { dateFormatter } from "../../utilities/utilities";

/*
 * Component Imports
 */


const ArticlePDF = (props) => {
	const { article, className } = props;

	return (
		<div className={className}>
			<div className={`${className}__body`}>
				<div className={`${className}__data`}>
					<p
						className={`${className}__category ${article.category}`}
					>
						{article.category.toUpperCase()}
					</p>
					<p>{dateFormatter(article.date)}</p>
				</div>
				<h1
					className={`${className}__title`}
					style={{ fontSize: "15pt" }}
				>
					{article.title}
				</h1>
			</div>
			<div className={`${className}__body`}>
				<ReactMarkdown source={article.content} />
				<style
					dangerouslySetInnerHTML={{
						__html: `
      .article__pdf p { font-size: 8pt; font-family: Montserrat,sans-serif; } .article__pdf h1 { font-size: 11pt; };
    `,
					}}
				/>
			</div>
		</div>
	);
};

ArticlePDF.defaultProps = {
	className: "article__pdf",
};

export default ArticlePDF;
