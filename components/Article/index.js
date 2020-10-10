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
	const { article, className, id } = props;

	const { coverPhoto, publishedDate, title } = article;

	const date = new Date(publishedDate);
	const publishedDateString = date.toDateString();

	return (
		<div className={`${className}`}>
			<Link href="/blogs/[id]" as={`/blogs/${id}`}>
				<a>
					<div className={`${className}__image`}>
						<img
							src={`https:${coverPhoto.fields.file.url}`}
							alt={coverPhoto.fields.description || `${title} cover photo`}
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
		</div>
	);
};

Article.defaultProps = {
	className: "article",
};

Article.propTypes = {
	article: PropTypes.oneOfType([PropTypes.object]).isRequired,
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
};

export default Article;
