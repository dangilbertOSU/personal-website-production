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
 * Image/SVG imports
 */

import photo1 from "../../../../public/images/Articles/article1.png";
import photo2 from "../../../../public/images/Articles/article2.jpg";
import photo3 from "../../../../public/images/Articles/article3.jpg";
import photo4 from "../../../../public/images/Articles/article4.jpg";
import photo5 from "../../../../public/images/Articles/article5.jpg";

/*
 * CSS imports
 */

import "./InsightsSection.css";

const dummyArticles = [
	{
		id: 0,
		title:
			"15 Strategies to Improve Your Site Search and Increase your Conversion Rate",
		content: `Today, Coveo and Sitecore have announced an expanded offering to bring Coveo AI-powered search and recommendations to 
		mid-market customers. This best-in-class offering, previously only available to enterprise-level customers, will enable Sitecore
		customers to build powerful, search-driven experiences with rich personalization djsfkljsdlkfjsfsjdsklfsa`,
		category: "technology",
		publish_date: "23 Jan 2020",
		image: photo1,
	},
	{
		id: 1,
		title: "The Must-Attend Coveo Impact Sessions for Sitecore Users",
		content: "dummy content",
		category: "technology",
		publish_date: "23 Jan 2020",
		image: photo2,
	},
	{
		id: 2,
		title: "Congratulations to the 2019 Sitecore MVPs!",
		content: "dummy content",
		category: "motivation",
		publish_date: "23 Jan 2020",
		image: photo3,
	},
	{
		id: 3,
		title: "Choosing The Best Audio Player Software For Your Computer",
		content: "dummy content",
		category: "business",
		publish_date: "23 Jan 2020",
		image: photo4,
	},
	{
		id: 4,
		title: "5 Trends to Include in Your Next Website Redesign",
		content: "dummy content",
		category: "business",
		publish_date: "23 Jan 2020",
		image: photo5,
	},
];

const Insights = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="insights__header">
				<SectionHeading
					header="Everything you need to know about sitecore technology, customer
          experience, and beyond"
					tab="Insights"
				/>
			</div>
			<ArticleGrid articles={dummyArticles} />
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
	className: "insights",
};

Insights.propTypes = {
	className: PropTypes.string,
};

export default Insights;