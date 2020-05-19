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

const dummyJobs = [
  {
    id: 0,
    title: "Senior Sitecore Developer",
    description:
      "This position is considered a multi-faceted leadership opportunity to support both internal and vendor support teams. This position is considered a multi-faceted lider We’re looking for people to join the team who are as We’re looking for people to join This position is considered a multi-faceted leadership opportunity to support both internal and vendor support teams. This position is considered a multi-faceted lider We’re looking for people to join the team who are as We’re looking for people to join ",
    link: "www.google.com",
    location: "Stefanton",
  },
  {
    id: 1,
    title: "Customer support supervisor",
    description:
      "This position is considered a multi-faceted leadership opportunity to support both internal and vendor support teams. This position is considered a multi-faceted lider We’re looking for people to join the team who are as We’re looking for people to join ",
    link: "www.google.com",
    location: "New Calista",
  },
  {
    id: 2,
    title: "Senior Financial Analyst",
    description:
      "This position is considered a multi-faceted leadership opportunity to support both internal and vendor support teams. This position is considered a multi-faceted lider We’re looking for people to join the team who are as We’re looking for people to join ",
    link: "www.google.com",
    location: "West Cloydhaven",
  },
];

const JobPostingList = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <h2>Open Positions</h2>
      <div className={className + "__items"}>
        {dummyJobs &&
          dummyJobs.map((job) => {
            const { id, title, description, link, location } = job;

            return (
              <JobPosting
                title={title}
                description={description}
                link={link}
                location={location}
                key={id}
              />
            );
          })}
      </div>
    </div>
  );
};

JobPostingList.defaultProps = {
  className: "job__posting__list",
};

JobPostingList.propTypes = {
  className: PropTypes.string,
};

export default JobPostingList;
