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

import DannonAtBeach from "../../../../public/images/Dannon/DannonAtBeach.jpg";

/*
 * CSS imports
 */

import "./WhoWeAreSection.css";

const WhoWeAre = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="who__we__are__text">
				<SectionHeading header="A Student of Web and Mobile Development" />
				<p>
					I have industry experience developing full stack web
					apps for businesses that have included architecting
					databases utilizing MongoDB and SQL, designing in
					Figma, React, Node/Express, and I am absolutely no
					stranger to just regular Vanilla JS and CSS.
				</p>
				<p>
					My focus at Oregon State University is Web and Mobile
					Development. I have developed mobile applications with
					groups in Android Studio. I have since been learning
					React native.
				</p>
			</div>
			<div className="image">
				<img alt="Dannon at the beach" src={DannonAtBeach} />
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
