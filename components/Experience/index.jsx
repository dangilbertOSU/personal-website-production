import PropTypes from 'prop-types';
import './Experience.css';

const Experience = (props) => {
  const {
    className,
    experiences,
  } = props;

 

  return (
    <div className={className}>
      {
          experiences && experiences.map((experience) => {
            const { jobTitle, location, date, description} = experience.fields;

            return (
              <div className={`${className}-item`} key={experience.sys.id}>
                <p>{jobTitle}</p>
                <p className={`${className}-location`}>@ {location}</p>
                <p className={`${className}-date`}>{date}</p>
                <p>{description}</p>
              </div>
            )
          })
      }
    </div>
  );
};

Experience.defaultProps = {
  className: 'experience',
};

Experience.propTypes = {
  className: PropTypes.string,
};

export default Experience;