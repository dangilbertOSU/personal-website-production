import "./Container.css";
import "./styles/Contact.css";

import Button from "../Button";

const Contact = (props) => {
  const { className } = props;

  return (
    <div className={className + " blue--background"}>
      <h2>Contact us</h2>
      <p>
        For more information about our services and to find out how Ignium can
        help improve your business.
      </p>
      <div className={"contact__submit"}>
        <input type="email" placeholder="Enter your email address"></input>
        <Button ariaLabel="submit email address">Let's Chat</Button>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  className: "container contact",
};

export default Contact;
