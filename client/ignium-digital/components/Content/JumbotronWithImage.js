import './Content.css';

const JumbotronWithImage = (props) => {
    const {
        alt,
        className,
        children,
        tabTitle,
        src,
        ...rest
    } = props;

    return (
        <div
            className={className}
            {...rest}
        >
            {
                tabTitle &&
                <span className="jumbotron__tab">
                    <span className="jumbotron__tab__line"></span><p>{tabTitle}</p>
                </span>
            }
            <div className="jumbtron--with--image__text">
                {children}
            </div>
            <div className="jumbtron--with--image__image">
                <img alt={alt} src={src} />
            </div>
        </div>
    );
};

JumbotronWithImage.defaultProps = {
    className: 'jumbotron jumbtron--with--image'
};

export default JumbotronWithImage;
