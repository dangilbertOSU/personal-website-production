const HamburgerMenu = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <svg width="24px" height="15px" viewBox="0 0 24 15" version="1.1">
      <defs>
        <rect id="path-1" x="0" y="0" width="375" height="80"></rect>
        <filter x="-2.9%" y="-12.5%" width="105.9%" height="127.5%" filterUnits="objectBoundingBox" id="filter-2">
          <feMorphology radius="0.5" operator="erode" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
          <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.074177007   0 0 0 0 0.0757634479   0 0 0 0 0.207993659  0 0 0 0.0637565559 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Mobile/menu" transform="translate(-335.000000, -32.000000)">
          <g>
            <g id="bg_menu">
              <use fill="black" fillOpacity="1" filter="url(#filter-2)"></use>
              <use fill="#FFFFFF" fillRule="evenodd"></use>
            </g>
            <g id="Mobile/btn/burger_default" transform="translate(335.000000, 32.000000)" fill="#0E1137">
              <g>
                <rect id="Rectangle" x="0" y="0" width="24" height="3"></rect>
                <rect id="Rectangle-Copy-2" x="0" y="6" width="24" height="3"></rect>
                <rect id="Rectangle-Copy" x="0" y="12" width="24" height="3"></rect>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

HamburgerMenu.defaultProps = {
  className: 'hamburger__menu'
};

export default HamburgerMenu;
