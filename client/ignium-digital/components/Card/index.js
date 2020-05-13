import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
	const {
		className,
		children,
		Icon,
		title,
	} = props;

	return (
		<div className={className}>
			{Icon && <Icon />}
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	);
};

Card.defaultProps = {
	className: "Card",
	children: PropTypes.node,
	Icon: null,
};

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	Icon: PropTypes.node,
	title: PropTypes.string.isRequired,
};

export default Card;
