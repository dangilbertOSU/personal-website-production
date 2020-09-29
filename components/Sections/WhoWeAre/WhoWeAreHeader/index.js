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
import ImageCard from "../../../ImageCard";

/*
 * Image/SVG imports
 */

import Projects from "../../../SVG/whoweare/Projects";
import Dollars from "../../../SVG/whoweare/Dollars";
import Members from "../../../SVG/whoweare/Members";
import Clients from "../../../SVG/whoweare/Clients";

import ContentfulLogo from "../../../../public/images/Technologies/contentful.png";
import NodeLogo from "../../../../public/images/Technologies/node.png";
import ReactLogo from "../../../../public/images/Technologies/react.png";
import SitecoreLogo from "../../../../public/images/Technologies/sitecore.png";
/*
 * CSS imports
 */

import "./WhoWeAreHeader.css";

const WhoWeAreHeader = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="who_we_are__header__text">
				<SectionHeading header="I use modern web development technologies to help you build your application faster and better" />
				<p>
					I love learning the latest technologies and applying
					them to fit the needs of businesses.
				</p>
			</div>
			<GridContainer>
				<ImageCard
					title="React"
					image={ReactLogo}
					content="Whether it be on Mobile or Web, React is an incredible JS library that will speed up your development."
				/>
				<ImageCard
					title="Node"
					image={NodeLogo}
					content="Using this backend runtime environment will let you utilize frameworks such as Express.js."
				/>
				<ImageCard
					title="Sitecore"
					image={SitecoreLogo}
					content="A dominating CMS platform that can provide your business with the tools needed to enhance your digital reach."
				/>
				<ImageCard
					title="Contentful"
					image={ContentfulLogo}
					content="The sweet spot where price meets quality. A CMS with ease of use and a price point that is hard to beat."
				/>
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
