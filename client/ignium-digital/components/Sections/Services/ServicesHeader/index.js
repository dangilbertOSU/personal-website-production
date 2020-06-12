/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import SectionHeading from "../../../SectionHeading";

/*
 * Image/SVG imports
 */

import ServicesHeaderImage from "../../../../public/images/services_header.png";

/*
 * CSS imports
 */

import "./ServicesHeader.css";

const ServicesHeader = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="services__header__heading text">
				<SectionHeading
					header="Let us help steer your organization in the right direction."
					tab="Services"
				/>
			</div>
			<div className="services__header__image">
				<img
					alt="Ignium Digital services group meeting"
					src={ServicesHeaderImage}
				/>
			</div>
			<div className="services__header__description text">
				<p>
					We offer a wide range of Sitecore tailored solutions,
					to help your organization to get the most of your
					Sitecore investment.
				</p>
			</div>
		</div>
	);
};

ServicesHeader.defaultProps = {
	className: "section services__header",
};

ServicesHeader.propTypes = {
	className: PropTypes.string,
};

export default ServicesHeader;
