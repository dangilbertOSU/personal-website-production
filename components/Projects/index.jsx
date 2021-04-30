import PropTypes from 'prop-types';
import './Projects.css';

const Projects = (props) => {
  const {
    className,
    projects,
  } = props;

  return (
    <div className={className}>
      {
        projects && projects.map((project) => {
          const { title, description, skills } = project.fields;

          return (
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
              {skills && skills.map((skill) => (<li>{skill}</li>))}
              </ul>
            </div>
          );
        })
      }
    </div>
  );
};

Projects.defaultProps = {
  className: 'className',
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;