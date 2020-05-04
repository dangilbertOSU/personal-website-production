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
    'button',
    `button--${variant}`,
    className
  ]);

  return (
    <button
      aria-label={ariaLabel}
      className={stack}
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
