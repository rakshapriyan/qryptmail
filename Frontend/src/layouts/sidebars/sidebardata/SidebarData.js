import * as Icon from 'react-feather';

const SidebarData = [
  { caption: 'Apps' },
  {
    title: 'Chat',
    href: '/apps/chat',
    icon: <Icon.MessageCircle />,
    id: 2.2,
    collapisble: false,
  },
  // {
  //   title: 'Contact',
  //   href: '/apps/contacts',
  //   icon: <Icon.MessageCircle />,
  //   id: 2.2,  
  //   collapisble: false,
  // },
  {
    title: 'Calendar',
    href: '/apps/calendar',
    icon: <Icon.Calendar />,
    id: 2.4,
    collapisble: false,
  },
 
  {
    title: 'Email',
    href: '/apps/email',
    icon: <Icon.Mail />,
    suffix: 'New',
    suffixColor: 'bg-success text-dark-white',
    id: 2.5,
    collapisble: false,
  },
  {
    title: 'Qrypt-AI',
    href: '/apps/treeview',
    icon: <Icon.Triangle />,
    id: 2.9,
    collapisble: false,
  },
  
 
  
  
];

export default SidebarData;
