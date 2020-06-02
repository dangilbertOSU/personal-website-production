import PropTypes from "prop-types";
import "./ArticleTab.css";

const ArticleTab = (props) => {
	const { active, className, setActive } = props;

	const tabs = ["All", "Technology", "Motivation", "Business"];

	return (
		<div className={className}>
			{tabs &&
				tabs.map((tab, index) => {
					return (
						<p
							className={
								active == index
									? "active__tab"
									: undefined
							}
							onClick={() => setActive(index)}
							key={tab}
						>
							{tab}
						</p>
					);
				})}
		</div>
	);
};

ArticleTab.defaultProps = {
	className: "article__tab",
};

ArticleTab.propTypes = {
	className: PropTypes.string,
};

export default ArticleTab;
