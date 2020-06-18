/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import Button from "../../../Button";

/*
 * Image/SVG imports
 */

import WelcomeLogo from "../../../../public/images/home_logo_jumbo.png";

/*
 * CSS imports
 */

import "./HomeHeader.css";

const HomeHeader = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="welcome__text">
				<h2 className="orange--text">Purpose. Passion. Profit.</h2>
				<h1>Investments driven by innovations</h1>
				<a
					href="https://calendly.com/ignium-digital/1-on-1-consultation-services"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button ariaLabel="let's chat">Let&apos;s Chat</Button>
				</a>
			</div>
			<div className="welcome__image">
				<img
					alt="Ignium Digital Jumobtron Logo"
					src={WelcomeLogo}
				/>
			</div>
		</div>
	);
};

HomeHeader.defaultProps = {
	className: "welcome",
};

HomeHeader.propTypes = {
	className: PropTypes.string,
};

export default HomeHeader;
