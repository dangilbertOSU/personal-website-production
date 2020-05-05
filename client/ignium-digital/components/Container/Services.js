import './Container.css';

import Button from '../Button'

const Services = (props) => {
    const { className } = props;

    return (
        <div className={className + " blue--background"}>
            <div className="services__header">
                <h2>We offer a wide range of Sitecore tailored solutions, to help your organization to get the most of your Sitecore investment.</h2>
                <span className="container__tab">
                    <span className="container__tab__line"></span><p>Services</p>
                </span>
            </div>
            
            <div className="services__links">
                <ul>
                    <li>
                        <p>Training</p>
                    </li>
                    <li>
                        <p>.Net Custom Development</p>
                    </li>
                    <li>
                        <p>Marketing Enablement</p>
                    </li>
                    <li>
                        <p>Sitecore Audit</p>
                    </li>
                    <li>
                        <p>Team Augmentation</p>
                    </li>
                    <li>
                        <p>Sitecore Upgrades</p>
                    </li>
                    <li>
                        <Button ariaLabel="view all sources" variant="secondary">View All Services</Button>
                    </li>
                </ul>
                
            </div>
        </div>
    );
};

Services.defaultProps = {
    className: 'container services',
};

export default Services;
