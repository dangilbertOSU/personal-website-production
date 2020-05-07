import PropTypes from 'prop-types';
import utilities from '../../utilities/utilities';

import './Container.css';

const Container = (props) => {
	const {
		className,
		children,
		backgroundColor,
		tabTitle,
		variant,
	} = props;

	const stack = utilities.createClassStack([
		className,
		`${className}--${variant}`,
		`${backgroundColor}`,
	]);

	return (
		<div className={stack}>
			{tabTitle && (
				<span className="container__tab">
					<span className="container__tab__line" />
					<p>{tabTitle}</p>
				</span>
			)}
			{children}
		</div>
	);
};

Container.defaultProps = {
	className: 'container',
	children: PropTypes.node,
	backgroundColor: 'default',
	tabTitle: PropTypes.node,
	variant: 'default',
};

Container.propTypes = {
	backgroundColor: PropTypes.oneOf(['default', 'blue--background']),
	className: PropTypes.string,
	children: PropTypes.node,
	tabTitle: PropTypes.node,
	variant: PropTypes.oneOf(['default', 'two--column']),
};

export default Container;
