import { ListGroup, ListGroupItem } from 'reactstrap';
import { User, Lock, Shield, Key, Link, Calendar, Settings } from 'react-feather';

const messages = [
  {
    id: 1,
    iconclass: <Lock size={20} />, // Icon for Level 1
    iconbg: 'warning',
    title: 'Level 1',
    desc: 'No Quantum Security',
  },
  {
    id: 2,
    iconclass: <Key size={20} />, // Icon for Level 2
    iconbg: 'success',
    title: 'Level 2',
    desc: 'Quantum-Aided AES ',
  },
  {
    id: 3,
    iconclass: <Shield size={20} />, // Icon for Level 3
    iconbg: 'info',
    title: 'Level 3',
    desc: 'Quantum Secure OTP',
  },
];

const NotificationDD = () => {
  return (
    <div>
      <ListGroup flush>
        {messages.map((msg) => (
          <ListGroupItem >
            <div className="d-flex align-items-center gap-3 py-2">
              <div
                className={`circle-box md-box flex-shrink-0 bg-light-${msg.iconbg} text-${msg.iconbg}`}
              >
                {msg.iconclass}
              </div>
              <div className="col-9">
                <h5 className="mb-0 fw-normal">{msg.title}</h5>
                <span className="text-muted text-truncate d-block">{msg.desc}</span>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default NotificationDD;
