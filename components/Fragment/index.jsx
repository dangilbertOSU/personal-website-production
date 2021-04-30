import PropTypes from 'prop-types';
import './Fragment.css';

const Fragment = (props) => {
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

Fragment.defaultProps = {
  className: 'fragment',
  children: PropTypes.node,
};

Fragment.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Fragment;