import PropTypes from "prop-types";
import utilities from "../../utilities/utilities";
import "./Button.css";

const Button = (props) => {
	const {
		ariaLabel,
		className,
		children,
		variant,
	} = props;

	const stack = utilities.createClassStack([
		className,
		`${className}--${variant}`,
	]);

	return (
		<button
			aria-label={ariaLabel}
			className={stack}
			label={children.toString()}
			type="button"
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	ariaLabel: PropTypes.string,
	className: "button",
	children: PropTypes.node,
	variant: "default",
};

Button.propTypes = {
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	variant: PropTypes.oneOf(["default", "secondary"]),
};

export default Button;
