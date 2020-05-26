/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Button from "../../../Button";
import SectionHeading from "../../../SectionHeading";

/*
 * Image/SVG imports
 */

import WhoWeAreImage from "../../../../public/images/home_who_we_are.png";

/*
 * CSS imports
 */

import "./WhoWeAreSection.css";

const WhoWeAre = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="who__we__are__text">
        <SectionHeading
          header="We are a personalized Sitecore focused digital agency"
          tab="Who We Are"
        />
        <p>
          We currently have a small team of Sitecore MVP&apos;s and Sitecore
          specialists to provide personalized assistance to help you with your
          digital transformation with Sitecore. We have the experience and
          expertise to help you with your most technical challenges or helping
          you with that first step in your Marketing Transformation with
          Sitecore.
        </p>
        <p>
          Our focus is on large Enterprises that are simply confused about the
          best way to get the most out of their Sitecore investment. We can also
          help as you start to look beyond the capabilities of Sitecore and
          start to explore your future digital initiaves on the web, mobile or
          Conversational Interfaces
        </p>
        <Button ariaLabel="read more" variant="secondary">
          Read More
        </Button>
      </div>
      <div className="image">
        <img alt="Ignium Digital teamwork who we are" src={WhoWeAreImage} />
      </div>
    </div>
  );
};

WhoWeAre.defaultProps = {
  className: "who__we__are",
};

WhoWeAre.propTypes = {
  className: PropTypes.string,
};

export default WhoWeAre;
