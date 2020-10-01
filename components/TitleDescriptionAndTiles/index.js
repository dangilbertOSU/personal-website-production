/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import GridContainer from "../GridContainer";
import SectionHeading from "../SectionHeading";

/*
 * CSS imports
 */

import "./index.css";

const TitleDescriptionAndTiles = (props) => {
	const { className, title, description, children } = props;

	return (
		<div className={className}>
			<div className="title_desc_tiles__header__text">
				<SectionHeading header={title} />
				<p>
					{description}
				</p>
			</div>
			<GridContainer>
				{children}
			</GridContainer>
		</div>
	);
};

TitleDescriptionAndTiles.defaultProps = {
     className: "title_desc_tiles__header",
};

TitleDescriptionAndTiles.propTypes = {
     className: PropTypes.string,
     title: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
};

export default TitleDescriptionAndTiles;