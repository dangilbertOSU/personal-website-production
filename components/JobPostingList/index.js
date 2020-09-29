/*
 * Function imports
 */

import PropTypes from "prop-types";

/*
 * Component imports
 */

import JobPosting from "../JobPosting";

/*
 * CSS imports
 */

import "./JobPostingList.css";

const JobPostingList = (props) => {
	const { className, careers } = props;

	return (
		<div className={className}>
			<h2>Open Positions</h2>
			<div className={`${className}__items`}>
				{careers.length > 0 ? (
					careers.map((job) => {
						const {
							id,
							title,
							description,
							link,
							location,
						} = job;

						return (
							<JobPosting
								title={title}
								description={description}
								link={link}
								location={location}
								key={id}
							/>
						);
					})
				) : (
					<p>There are currently no openings</p>
				)}
			</div>
		</div>
	);
};

JobPostingList.defaultProps = {
	careers: [],
	className: "job__posting__list",
};

JobPostingList.propTypes = {
	careers: PropTypes.arrayOf(PropTypes.object),
	className: PropTypes.string,
};

export default JobPostingList;
