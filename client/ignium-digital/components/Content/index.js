import './Content.css';

const Content = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <main
      className={className}
      {...rest}
    >
      {children}
    </main>
  );
};

Content.defaultProps = {
  className: 'content'
};

export default Content;
