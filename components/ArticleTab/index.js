/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * CSS imports
 */

import "./ArticleTab.css";

const ArticleTab = (props) => {
	const { active, className, setActive } = props;

	const tabs = ["All", "Technology", "Motivation", "Business"];

	return (
		<div className={className}>
			{tabs
				&& tabs.map((tab, index) => {
					return (
						<p
							className={
								active === index
									? "active__tab"
									: undefined
							}
							onClick={() => setActive(index)}
							onKeyDown={() => setActive(index)}
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
	active: 0,
	className: "article__tab",
	setActive: () => {},
};

ArticleTab.propTypes = {
	active: PropTypes.number,
	className: PropTypes.string,
	setActive: PropTypes.func,
};

export default ArticleTab;
