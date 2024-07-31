import * as Icon from 'react-feather';

const SidebarData = [
  { caption: 'Home' },
  { caption: 'Apps' },
  {
    title: 'Apps',
    href: '/apps',
    id: 2,
    icon: <Icon.Grid />,
    ddType: 'two-column',
    collapisble: true,
    children: [
     
      {
        title: 'Chat',
        href: '/apps/chat',
        icon: <Icon.MessageCircle />,
      },
     
      {
        title: 'Calendar',
        href: '/apps/calendar',
        icon: <Icon.Calendar />,
      },
      {
        title: 'Email',
        href: '/apps/email',
        icon: <Icon.Mail />,
      },
      
      
      
      
       
      //   title: 'TreeView',
      //   href: '/apps/treeview',
      //   icon: <Icon.GitMerge />,
      // },
    ],
  },
  
  
  // {
  //   title: 'DD Menu',
  //   href: '/',
  //   id: 7,
  //   collapisble: true,
  //   icon: <Icon.Disc />,
  //   children: [
  //     {
  //       title: 'Simple dd 1',
  //       href: '/',
  //       icon: <Icon.Disc />,
  //     },
  //     {
  //       title: 'Simple dd 2',
  //       href: '/',
  //       icon: <Icon.Disc />,
  //     },
  //     {
  //       title: 'Simple dd 3',
  //       href: '/',
  //       icon: <Icon.Disc />,
  //       children: [
  //         {
  //           title: 'Simple dd 1.1',
  //           href: '/alerts',
  //           icon: <Icon.Disc />,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default SidebarData;
