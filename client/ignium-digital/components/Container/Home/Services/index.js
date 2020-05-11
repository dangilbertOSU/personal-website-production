import "../../Container.css";
import "./Services.css";

import PropTypes from "prop-types";

import Button from "../../../Button";

const Services = (props) => {
  const { className } = props;

  return (
    <div className={`${className} blue--background`}>
      <h2 className="container__header">
        We offer a wide range of Sitecore tailored solutions, to help your
        organization to get the most of your Sitecore investment.
        <span className="container__tab">
          <span className="container__tab__line" />
          <h4>Services</h4>
        </span>
      </h2>
      <div className="services__links">
        <ul>
          <li>
            <p>Training</p>
          </li>
          <li>
            <p>.Net Custom Development</p>
          </li>
          <li>
            <p>Marketing Enablement</p>
          </li>
          <li>
            <p>Sitecore Audit</p>
          </li>
          <li>
            <p>Team Augmentation</p>
          </li>
          <li>
            <p>Sitecore Upgrades</p>
          </li>
          <li>
            <Button ariaLabel="view all services" variant="secondary">
              View All Services
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Services.defaultProps = {
  className: "container services",
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
