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
                         <p>Name</p>
                         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={`${className}__input`}>
                         <p>Email</p>
                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={`${className}__input`}>
                         <p>Phone Number</p>
                         <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className={`${className}__input`}>
                         <p>Message</p>
                         <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
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
