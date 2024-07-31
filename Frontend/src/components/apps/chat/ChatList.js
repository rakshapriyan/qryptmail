import React, { useEffect, useState } from 'react';
import { Nav } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { fetchChats } from '../../../store/apps/chat/ChatSlice';
import Modal from 'react-modal';

const ChatList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const [isModalOpen, setModalOpen] = useState(false);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const textStyle = {
    fontFamily: 'YourFancyFont',
    fontSize: '70px',
    fontWeight: 'bold',
    color: 'yourColor',
  };

  const smallerTextStyle = {
    fontSize: '69px',
    fontWeight: 'bold',
    color: 'yourColor',
  };

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
      color:'black',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      padding: '30px',
      borderRadius: '10px',
      border: 'none', // Remove default border
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
      maxWidth: '400px', // Set max width for better aesthetics
    },
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Nav className="" style={containerStyle}>
      {/* Displaying QRYPT in one line */}
      <div style={textStyle}>
        <br />
        QRYPT
      </div>

      {/* Displaying AID below QRYPT */}
      <div style={smallerTextStyle}>
        AID
      </div>

      {/* Description button */}
      <button onClick={openModal} style={{ marginTop: '20px', fontSize: '18px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Learn More
      </button>

      {/* Popup Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="QryptAid Modal"
      >
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#4CAF50' }}>Welcome to QryptAid!</h1>
        <p style={{ fontSize: '16px' }}>Unlock the power of instant solutions for all your queries and doubts. QryptAid is here to make your life easier!</p>
        <button onClick={closeModal} style={{ marginTop: '20px', fontSize: '18px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Got it!
        </button>
      </Modal>
    </Nav>
  );
};

export default ChatList;
