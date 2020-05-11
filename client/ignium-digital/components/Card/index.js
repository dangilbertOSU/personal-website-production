import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  const { className, children, Icon, title } = props;

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
  Icon: null,
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
