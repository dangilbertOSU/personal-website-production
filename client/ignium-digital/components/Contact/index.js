/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Button from "../Button";

/*
 * CSS imports
 */

import "./Contact.css";

const Contact = (props) => {
	const { className } = props;

	return (
		<div className={`${className} blue--background`}>
			<h2>Contact us</h2>
			<p>
				For more information about our services and to find out how Ignium can
				help improve your business.
			</p>
			<div className="contact__submit">
				<input
					name="contact_email"
					type="email"
					placeholder="Enter your email address"
					aria-label="Email input"
				/>
				<Button ariaLabel="submit email address">Let&apos;s Chat</Button>
			</div>
		</div>
	);
};

Contact.defaultProps = {
	className: "contact",
};

Contact.propTypes = {
	className: PropTypes.string,
};

export default Contact;
