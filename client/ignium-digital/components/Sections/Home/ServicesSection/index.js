import PropTypes from "prop-types";

import Button from "../../../Button";
import SectionHeader from "../../../SectionHeader";

import "./ServicesSection.css";

const Services = (props) => {
  const { className } = props;

  return (
    <div className={`${className} blue--background`}>
      <SectionHeader
        header="We offer a wide range of Sitecore tailored solutions, to help your
        organization to get the most of your Sitecore investment."
        tab="Services"
      />
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
  className: "services",
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
