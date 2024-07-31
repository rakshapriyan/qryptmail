import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi';
import { BiLogoGmail } from "react-icons/bi";

const AddAccount = () => {
  const [isHoveredGmail, setIsHoveredGmail] = useState(false);
  const [isHoveredHotmail, setIsHoveredHotmail] = useState(false);
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const boxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    height: '350px',
    margin: '20px',
  };

  const optionStyle = {
    display: 'flex',
    flexDirection: 'column', // Change to column direction
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const optionHoverStyle = {
    backgroundColor: '#3891ea',
    ...optionStyle,
  };

  const backButtonStyle = {
    fontSize:'20px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const iconStyle = {
    fontSize: '30px', // Adjust the icon size
    marginBottom: '10px', // Add space between icon and text
  };

  const handleOptionClick = (provider) => {
    alert(`Selected Provider: ${provider}`);
  };

  const handleBackButtonClick = () => {
    navigate('/about');
  };

  return (
    <div style={containerStyle}>
      <FaArrowLeft style={backButtonStyle} onClick={handleBackButtonClick} />
      <div style={boxStyle}>
        <h2 ><b>Add an Account</b></h2>
        {/* <br></br> */}
        <br></br>
        <div
          style={isHoveredGmail ? optionHoverStyle : optionStyle}
          onMouseEnter={() => setIsHoveredGmail(true)}
          onMouseLeave={() => setIsHoveredGmail(false)}
          onClick={() => handleOptionClick('Gmail')}
        >
          <BiLogoGmail style={iconStyle}/>  
          <span><h5>Gmail</h5></span>
        </div>
        <br></br>
        {/* <br></br> */}
        <div
          style={isHoveredHotmail ? optionHoverStyle : optionStyle}
          onMouseEnter={() => setIsHoveredHotmail(true)}
          onMouseLeave={() => setIsHoveredHotmail(false)}
          onClick={() => handleOptionClick('Hotmail')}
        >
          <PiMicrosoftOutlookLogoFill style={iconStyle} />
          <span><h5>Hotmail</h5></span>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;