import { Link } from 'react-router-dom';
import React from 'react';

const Logo = () => {
  return (
    <Link to="/about" className="d-flex align-items-center gap-2">
      <span className="logo-text">QryptMail</span>
    </Link>
  );
};

export default Logo;
