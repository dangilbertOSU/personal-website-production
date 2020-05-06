import utilities from '../../utilities/utilities';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const {
    ariaLabel,
    className,
    children,
    variant,
    ...rest
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
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: 'button',
  variant: 'default'
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'secondary']),
};

export default Button;
