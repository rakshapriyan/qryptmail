import React from 'react';
import { DropdownItem } from 'reactstrap';
import { User, FileText, Plus, Settings } from 'react-feather';
import user1 from '../../assets/images/users/user4.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const ProfileDD = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  

  const handleAddAccountClick = () => {
    // Navigate to the AddAccount page
    navigate('/addaccount');
  };
  const handleProfileClick = () => {
    // Navigate to the Profile page
    navigate('/myprofile');
  };

  return (
    <div>
      <div className="d-flex gap-3 p-3 text-white rounded-top bg-info pt-2 align-items-center">
        <img src={user1} alt="user" className="mt-2 rounded-circle" width="60" />
        <span>
          <h5 className="mb-0">Aasif</h5>
          <small className="fs-6">aasif@gmail.com</small>
        </span>
      </div>
      <DropdownItem className="px-4 py-3" onClick={handleProfileClick}>
        <User size={20} />
        &nbsp; My Profile
      </DropdownItem>
      <DropdownItem className="px-4 py-3">
        <FileText size={20} />
        &nbsp; Edit Profile
      </DropdownItem>
      <DropdownItem className="px-4 py-3" onClick={handleAddAccountClick}>
        <Plus size={20} />
        &nbsp; Add an account
      </DropdownItem>
      {/* <DropdownItem className="px-4 py-3">
        <Droplet size={20} />
        &nbsp; Customize
      </DropdownItem> */}
      <DropdownItem divider />
      <DropdownItem className="px-4 py-3">
        <Settings size={20} />
        &nbsp; Settings
      </DropdownItem>
      <DropdownItem divider />
    </div>
  );
};

export default ProfileDD;