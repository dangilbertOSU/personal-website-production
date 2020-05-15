import "../../Section.css";
import "./HomeHeader.css";

import PropTypes from "prop-types";

import Button from "../../../Button";
import WelcomeLogo from "../../../../public/images/home_logo_jumbo.png";

const HomeHeader = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="welcome__text">
        <h2 className="orange--text">Purpose. Passion. Profit.</h2>
        <h1>Investments driven by innovations</h1>
        <Button ariaLabel="let's chat">Let&apos;s Chat</Button>
      </div>
      <div className="welcome__image">
        <img alt="Ignium Digital Jumobtron Logo" src={WelcomeLogo} />
      </div>
    </div>
  );
};

HomeHeader.defaultProps = {
  className: "section welcome",
};

HomeHeader.propTypes = {
  className: PropTypes.string,
};

export default HomeHeader;
