import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as LogoDarkIcon } from '../../assets/images/logos/dark-logo-icon.svg';
// import { ReactComponent as LogoDarkText } from '../../assets/images/logos/dark-logo-text.svg';
import { ReactComponent as LogoWhiteIcon } from '../../assets/images/logos/white-logo-icon.svg';
// import { ReactComponent as LogoWhiteText } from '../../assets/images/logos/white-logo-text.svg';

const Logo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const toggleMiniSidebar = useSelector((state) => state.customizer.isMiniSidebar);
  const activeTopbarBg = useSelector((state) => state.customizer.topbarBg);

  const headingStyle = {
    fontSize: '2rem', // Adjust the font size as needed
    fontWeight: 700, // Adjust the font weight as needed
    color: '#fff', // Set text color to white
    fontFamily: 'Arial, sans-serif', // Use a professional font-family
    textDecoration: 'none', // Remove underline
    // Add any additional styling you want
  };

  return (
    <Link to="/about" className="d-flex align-items-center gap-2" style={{ textDecoration: 'none' }}>
      {isDarkMode || activeTopbarBg !== 'white' ? (
        <>
          <LogoWhiteIcon />
          {toggleMiniSidebar ? '' : <span style={headingStyle}>QryptMail</span>}
        </>
      ) : (
        <>
          <LogoDarkIcon />
          {toggleMiniSidebar ? '' : <span style={headingStyle}>QryptMail</span>}
        </>
      )}
    </Link>
  );
};

export default Logo;
