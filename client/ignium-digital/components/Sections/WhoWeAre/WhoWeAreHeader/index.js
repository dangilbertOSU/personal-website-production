/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import GridContainer from "../../../GridContainer";
import SectionHeading from "../../../SectionHeading";
import Card from "../../../Card";

/*
 * Image/SVG imports
 */

import Projects from "../../../SVG/whoweare/Projects";
import Dollars from "../../../SVG/whoweare/Dollars";
import Members from "../../../SVG/whoweare/Members";
import Clients from "../../../SVG/whoweare/Clients";
/*
 * CSS imports
 */

import "./WhoWeAreHeader.css";

const WhoWeAreHeader = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="who_we_are__header__text">
				<SectionHeading
					header="We will help you to apply easily the latest technologies in your business"
					tab="Who We Are"
				/>
				<p>
					With 10 years’ background of practice that combines
					consulting, strategy, design and engineering at scale.
					Mainly in finance, distributed ledger and cloud
					technology.
				</p>
			</div>
			<GridContainer>
				<Card title="Successful projects" Icon={() => <Projects />}>
					Were successfully delivered in fintech, real estate,
					healthcare, marketing, and busines services industries.
				</Card>
				<Card title="US dollars" Icon={() => <Dollars />}>
					Were raised by startups and companies, using our
					tailor-made investor packages and digital solutions.
				</Card>
				<Card title="Team members" Icon={() => <Members />}>
					Professional team focused on client success investment
					return and long term partnerships
				</Card>
				<Card title="Clients" Icon={() => <Clients />}>
					to move forward with the long-term relationships.
				</Card>
			</GridContainer>
		</div>
	);
};

WhoWeAreHeader.defaultProps = {
	className: "who_we_are__header",
};

WhoWeAreHeader.propTypes = {
	className: PropTypes.string,
};

export default WhoWeAreHeader;
