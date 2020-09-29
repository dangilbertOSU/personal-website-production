/*
 * Function imports
 */

import PropTypes from "prop-types";
import utilities from "../../utilities/utilities";

/*
 * CSS imports
 */

import "./Button.css";

const Button = (props) => {
	const {
		ariaLabel, className, children, onClick, variant,
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
			onClick={() => onClick()}
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
	onClick: () => {},
	variant: "default",
};

Button.propTypes = {
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
	variant: PropTypes.oneOf(["default", "secondary"]),
};

export default Button;
