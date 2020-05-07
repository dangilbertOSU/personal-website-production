import "./Container.css";
import "./styles/WhoWeAre.css";

import Button from "../Button";
import WhoWeAreImage from "../../public/images/home_who_we_are.png";

const WhoWeAre = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="who__we__are__text">
        <h2 className="container__header">
          We are a personalized Sitecore focused digital agency
          <span className="container__tab">
            <span className="container__tab__line"></span>
            <h4>Who We Are</h4>
          </span>
        </h2>
        <p>
          We currently have a small team of Sitecore MVP's and Sitecore
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
  className: "container who__we__are",
};

export default WhoWeAre;
