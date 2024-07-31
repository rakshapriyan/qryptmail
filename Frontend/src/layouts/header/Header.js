import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Input,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import * as Icon from 'react-feather';
import { HelpCircle as QuestionMark } from 'react-feather';
import { ReactComponent as LogoWhite } from '../../assets/images/logos/white-logo-icon.svg';
import { ReactComponent as LogoDark } from '../../assets/images/logos/dark-logo-icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import MessageDD from './MessageDD';
import NotificationDD from './NotificationDD';
import MegaDD from './MegaDD';
import user1 from '../../assets/images/users/user4.jpg';
import Logo from '../logo/Logo';
import ProfileDD from './ProfileDD';
import { ToggleMiniSidebar, ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [qryptMailModalOpen, setQryptMailModalOpen] = useState(false);

  const handleLogoutClick = () => {
    navigate('/');
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleQryptMailModal = () => {
    setQryptMailModalOpen(!qryptMailModalOpen);
  };

  return (
    <>
      <Navbar
        color={topbarColor}
        dark={!isDarkMode}
        light={isDarkMode}
        expand="lg"
        className="topbar"
      >
        <div className="d-none d-lg-flex align-items-center logo-space">
          <Logo />
          <span className="ms-auto d-sm-block d-lg-none">
            <Button
              close
              size="sm"
              className="ms-auto d-sm-block d-lg-none"
              onClick={() => dispatch(ToggleMobileSidebar())}
            />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <Button
            color={topbarColor}
            className="d-none d-lg-block mx-1 border-0 hov-dd"
            onClick={() => dispatch(ToggleMiniSidebar())}
          >
            <Icon.Menu size={18} />
          </Button>
          <NavbarBrand href="/about" className="d-sm-block d-lg-none">
            {isDarkMode || topbarColor === 'white' ? <LogoDark /> : <LogoWhite />}
          </NavbarBrand>
          <Button
            color={topbarColor}
            className="d-sm-block d-lg-none border-0 mx-1 hov-dd"
            onClick={() => dispatch(ToggleMobileSidebar())}
          >
            <i className="bi bi-list" />
          </Button>
        </div>

        <Nav className="me-auto d-flex flex-row align-items-center" navbar>
          <UncontrolledDropdown className="mx-1 hov-dd">
            <DropdownToggle className="bg-transparent border-0" color={topbarColor}>
              <Icon.MessageSquare size={18} />
            </DropdownToggle>
            <DropdownMenu className="ddWidth" style={{ maxHeight: '450px' }}>
              <div className="bg-primary p-3 text-white rounded-top">Security Levels</div>
              <SimpleBar style={{ maxHeight: '350px' }}>
                <NotificationDD />
              </SimpleBar>
              <DropdownItem divider />
              <div className="p-2 px-3">
                <Button color="primary" size="sm" block onClick={toggleModal}>
                  Learn
                </Button>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown className="mx-1 hov-dd">
            <DropdownToggle className="bg-transparent border-0" color={topbarColor}>
              <QuestionMark size={18} />
            </DropdownToggle>
            <DropdownMenu className="ddWidth">
              <div className="bg-danger p-3 text-white rounded-top">Why Use QryptMail</div>
              <SimpleBar style={{ maxHeight: '350px' }}>
                <MessageDD />
              </SimpleBar>
              <DropdownItem divider />
              <div className="p-2 px-3">
                <Button color="danger" size="sm" block onClick={toggleQryptMailModal}>
                  Check All
                </Button>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown className="mega-dropdown mx-1 hov-dd">
            <DropdownToggle className="bg-transparent border-0" color={topbarColor}>
              <Icon.Grid size={18} />
            </DropdownToggle>
            <DropdownMenu>
              <MegaDD />
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

        <div className="d-flex align-items-center">
          <Input
            type="search"
            placeholder="Search"
            className="rounded-pill d-md-block d-none my-1 me-2"
          ></Input>

          <UncontrolledDropdown className="hov-dd">
            <DropdownToggle color="transparent">
              <img src={user1} alt="profile" className="rounded-circle" width="30" />
            </DropdownToggle>
            <DropdownMenu className="ddWidth profile-dd" end>
              <ProfileDD />
              <div className="p-2 px-3">
                <Button color="danger" size="sm" onClick={handleLogoutClick}>
                  Logout
                </Button>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </Navbar>

      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Security Levels</ModalHeader>
        <ModalBody>
          <p>LEVEL 1 : No Quantum Security.</p>
          <p>LEVEL 2 : Quantum-Aided AES using Quantum Keys as Seeds.</p>
          <p>LEVEL 3 : Quantum Secure employing One Time Pad.</p>
        </ModalBody>
      </Modal>

      <Modal isOpen={qryptMailModalOpen} toggle={toggleQryptMailModal} centered>
        <ModalHeader toggle={toggleQryptMailModal}>Why Use QryptMail</ModalHeader>
        <ModalBody>
          {/* Replace with the actual reasons for using QryptMail */}
          <p>
            Reason 1: QryptMail ensures end-to-end encryption, providing a secure communication
            channel.
          </p>
          <p>
            Reason 2: With QryptMail, your messages are protected against quantum computing threats.
          </p>
          <p>
            Reason 3: QryptMail offers advanced features for managing and organizing your secure
            communications.
          </p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
