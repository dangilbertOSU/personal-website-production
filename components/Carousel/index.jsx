import PropTypes from 'prop-types';
import './Carousel.css';

const Carousel = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

Carousel.defaultProps = {
  className: 'className',
  children: PropTypes.node,
};

Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Carousel;