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
            <div className={`${className}-item`} key={project.sys.id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className={`${className}-item-skills`}>
              {skills && skills.map((skill) => (<li key={skill}>{skill}</li>))}
              </ul>
            </div>
          );
        })
      }
    </div>
  );
};

Projects.defaultProps = {
  className: 'projects',
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;