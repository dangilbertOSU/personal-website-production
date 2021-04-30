import PropTypes from 'prop-types';

import Link from "next/link";

import './Biography.css';

import GitHubLogo from '../SVG/social/GitHubLogo';
import LinkedInLogo from '../SVG/social/LinkedInLogo';
import EmailLogo from '../SVG/social/EmailLogo';

const Biography = (props) => {
  const {
    biography,
    className,
  } = props;

  const { description, name } = biography;

  return (
    <div className={className}>
      <h2>
        {name}<span className="blink"> |</span>
      </h2>
      <p className={`${className}-description`}>{description}</p>
      <div className={`${className}-social-links`}>
        <Link href="//www.linkedin.com/in/dannon-gilbert-19705371/" passHref={true}>
          <a target="_blank">
            <LinkedInLogo />
          </a>
        </Link>
        <Link href="//github.com/dangilbertOSU" passHref={true}>
          <a target="_blank">
            <GitHubLogo />
          </a>
        </Link>
        <a href="mailto:dannongilbertdev@gmail.com"  target="_blank">
          <EmailLogo />
        </a>
      </div>
    </div>
  );
};

Biography.defaultProps = {
  className: 'biography',
};

Biography.propTypes = {
  className: PropTypes.string,
};

export default Biography;