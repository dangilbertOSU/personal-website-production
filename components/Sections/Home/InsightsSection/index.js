/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Link from "next/link";
import ArticleGrid from "../../../ArticleGrid";
import Button from "../../../Button";
import SectionHeading from "../../../SectionHeading";

/*
 * CSS imports
 */

import "./InsightsSection.css";

const Insights = (props) => {
	const { articles, className } = props;

	return (
		<div className={className}>
			<div className="insights__header">
				<SectionHeading
					header="Everything you need to know about sitecore technology, customer
          experience, and beyond"
					tab="Insights"
				/>
			</div>
			<ArticleGrid articles={articles} />
			<div className="insights__articles__button">
				<Link href="/insights">
					<a>
						<Button
							ariaLabel="view all articles"
							variant="secondary"
						>
							View All Articles
						</Button>
					</a>
				</Link>
			</div>
		</div>
	);
};

Insights.defaultProps = {
	articles: [],
	className: "insights",
};

Insights.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.object),
	className: PropTypes.string,
};

export default Insights;
