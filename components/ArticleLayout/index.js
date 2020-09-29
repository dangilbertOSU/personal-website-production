import PropTypes from "prop-types";
import "./ArticleLayout.css";

const ArticleLayout = (props) => {
	const { className, children } = props;

	return <div className={className}>{children}</div>;
};

ArticleLayout.defaultProps = {
	className: "article__layout",
	children: PropTypes.node,
};

ArticleLayout.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default ArticleLayout;
