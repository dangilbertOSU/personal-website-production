import PropTypes from "prop-types";

import GridContainer from "../../../GridContainer";
import SectionHeader from "../../../SectionHeader";
import Card from "../../../Card";

import HoursIcon from "../../../SVG/careers/HoursIcon";
import OngoingIcon from "../../../SVG/careers/OngoingIcon";
import ProjectsIcon from "../../../SVG/careers/ProjectsIcon";
import SalaryIcon from "../../../SVG/careers/SalaryIcon";

import "./CareersHeader.css";

const CareersHeader = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="careers__header__text">
        <SectionHeader header="Our benefits" tab="Careers" />
        <p>
          Join our company to meet people, try something new, or do more of what
          you love.
        </p>
      </div>
      <GridContainer>
        <Card title="Competitive Salary" Icon={() => <SalaryIcon />}>
          Were successfully delivered in fintech, real estate, healthcare,
          marketing, and busines services industries.
        </Card>
        <Card title="Flexible Hours" Icon={() => <HoursIcon />}>
          Were raised by startups and companies, using our tailor-made investor
          packages and digital solutions.
        </Card>
        <Card title="Ongoing Training" Icon={() => <OngoingIcon />}>
          Professional team focused on client success investment return and long
          term partnerships
        </Card>
        <Card title="Interesting Projects" Icon={() => <ProjectsIcon />}>
          Have returned to our team of professionals and decided to move forward
          with the long-term relationships.
        </Card>
      </GridContainer>
    </div>
  );
};

CareersHeader.defaultProps = {
  className: "careers__header",
};

CareersHeader.propTypes = {
  className: PropTypes.string,
};

export default CareersHeader;
