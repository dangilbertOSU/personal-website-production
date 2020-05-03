import './Content.css';

const JumbotronWithImage = (props) => {
    const {
        alt,
        className,
        children,
        src,
        ...rest
    } = props;

    return (
        <div
            className={className}
            {...rest}
        >
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
