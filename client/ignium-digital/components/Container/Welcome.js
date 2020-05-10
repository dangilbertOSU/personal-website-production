import './Container.css';
import './styles/Welcome.css';

import PropTypes from 'prop-types';

import Button from '../Button';
import WelcomeLogo from '../../public/images/home_logo_jumbo.png';

const Contact = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="welcome__text">
				<h2 className="orange--text">Purpose. Passion. Profit.</h2>
				<h1>Investments driven by innovations</h1>
				<Button ariaLabel="let's chat">Let&apos;s Chat</Button>
			</div>
			<div className="welcome__image">
				<img alt="Ignium Digital Jumobtron Logo" src={WelcomeLogo} />
			</div>
		</div>
	);
};

Contact.defaultProps = {
	className: 'container welcome',
};

Contact.propTypes = {
	className: PropTypes.string,
};

export default Contact;
