/*
 * Function imports
 */

import PropTypes from "prop-types";
import { useState } from "react";

/*
 * Component imports
 */

import Button from "../Button";

/*
 * CSS imports
 */

import "./ContactForm.css";

const ContactForm = (props) => {
     const { className } = props;
     
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [message, setMessage] = useState("");

	return (
		<div className={className}>
               <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={`${className}__input`}>
                         <label htmlFor="name">Name</label>
                         <input type="text" id="name" name="name" />
                    </div>
                    <div className={`${className}__input`}>
                         <label htmlFor="email">Email</label>
                         <input type="email" id="email" name="email" />
                    </div>
                    <div className={`${className}__input`}>
                         <label htmlFor="tel">Phone Number</label>
                         <input type="tel" id="tel" name="tel" />
                    </div>
                    <div className={`${className}__input`}>
                         <label htmlFor="message">Message</label>
                         <textarea type="text" id="message" name="message"  />
                    </div>
                    <div className={`${className}__submit`}>
                         <Button ariaLabel="submit" type="submit">
                              Submit
                         </Button>
                    </div>
               </form>
		</div>
	);
};

ContactForm.defaultProps = {
	className: "contact__form",
};

ContactForm.propTypes = {
	className: PropTypes.string,
};

export default ContactForm;
