import Link from 'next/link'
import './Footer.css';

/* 
 * SVG imports
 */

import FooterLogo from '../SVG/FooterLogo';
import TwitterLogo from '../SVG/social/TwitterLogo';
import LinkedInLogo from '../SVG/social/LinkedInLogo';
import EmailLogo from '../SVG/social/EmailLogo';

const Footer = (props) => {
  const { className } = props;

  return (
    <footer className={className}>
      <div className={className + "__footer__logo"}>
        <FooterLogo />
      </div>
      <div className={className + "__social__icons"}>
        <a href="https://twitter.com/IgniumDigital" target="_blank">
          <TwitterLogo />
        </a>
        <a href="https://www.linkedin.com/company/ignium-digital" target="_blank">
          <LinkedInLogo />
        </a>
        <a href="#" target="_blank">
          <EmailLogo />
        </a>
      </div>
      <nav className={className + "__links"}>
        <ul>
          <li>
            <Link href="/whoweare">
              <a>Who We Are</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/insights">
              <a>Insights</a>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <a>Careers</a>
            </Link>
          </li>
          <li>
            <Link href="/letschat">
              <a><span className="orange--text">Let's Chat</span></a>
            </Link>
          </li>
        </ul>
      </nav>
      <p>© Ignium Digital, LLC. 2019, All Rights Reserved</p>
    </footer>
  );
};

Footer.defaultProps = {
  className: 'footer'
};

export default Footer;
