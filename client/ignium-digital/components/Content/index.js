import './Content.css';
import PropTypes from 'prop-types';

const Content = (props) => {
	const {
		className,
		children,
	} = props;

	return (
		<main
			className={className}
		>
			{children}
		</main>
	);
};

Content.defaultProps = {
	className: 'content',
	children: PropTypes.node,
};

Content.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Content;
