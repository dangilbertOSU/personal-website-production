import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const {
    ariaLabel,
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      aria-label={ariaLabel}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: 'button'
};

Button.propTypes = {

  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;
