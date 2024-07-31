import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from 'reactstrap';
import { User, Mail, Phone } from 'react-feather';

const NoteList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Assuming fetchNotes is used to fetch profile details in the actual implementation
    // Replace this with the appropriate action for fetching user profile data
    // dispatch(fetchNotes());
  }, [dispatch]);

  // Replace the selector logic with the actual state structure for user profile
  const userProfile = useSelector((state) => state.notesReducer.userProfile);

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>User Profile</h2>
        <div style={fieldStyle}>
          <div style={fieldItemStyle}>
            <User style={iconStyle} />
            <span>Username: {userProfile.username}</span>
          </div>
          <div style={fieldItemStyle}>
            <Mail style={iconStyle} />
            <span>Email: {userProfile.email}</span>
          </div>
          <div style={fieldItemStyle}>
            <Phone style={iconStyle} />
            <span>Phone: {userProfile.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  height: '250px',
  margin: '20px',
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px',
};

const fieldItemStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '5px',
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '20px',
};

export default NoteList;
