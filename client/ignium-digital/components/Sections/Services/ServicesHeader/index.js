import "../../Section.css";
import "./ServicesHeader.css";

import PropTypes from "prop-types";
import ServicesHeaderImage from "../../../../public/images/services_header.png";

const ServicesHeader = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="services__header__heading text">
        <h2 className="section__header">
          Let us help steer your organization in the right direction.
          <span className="section__tab">
            <span className="section__tab__line" />
            <h4>Services</h4>
          </span>
        </h2>
      </div>
      <div className="services__header__image">
        <img
          alt="Ignium Digital services group meeting"
          src={ServicesHeaderImage}
        />
      </div>
      <div className="services__header__description text">
        <p>
          We offer a wide range of Sitecore tailored solutions, to help your
          organization to get the most of your Sitecore investment.
        </p>
      </div>
    </div>
  );
};

ServicesHeader.defaultProps = {
  className: "section services__header",
};

ServicesHeader.propTypes = {
  className: PropTypes.string,
};

export default ServicesHeader;
