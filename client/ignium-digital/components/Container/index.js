import utilities from '../../utilities/utilities';
import PropTypes from 'prop-types';

import './Container.css';

const Container = (props) => {
    const {
        className,
        children,
        tabTitle,
        variant,
        ...rest
    } = props;

    const stack = utilities.createClassStack([
        className,
        `${className}--${variant}`,
    ]);

    return (
        <div
            className={stack}
            {...rest}
        >
            {
                tabTitle &&
                <span className="container__tab">
                    <span className="container__tab__line"></span><p>{tabTitle}</p>
                </span>
            }
            {children}
        </div>
    );
};

Container.defaultProps = {
    className: 'container',
    variant: 'default'
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    // variant: PropTypes.any(['default', 'two--column', 'blue--background']),
};

export default Container;
