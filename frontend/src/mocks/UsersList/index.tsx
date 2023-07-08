import { UsersListMocks } from "../../types/UsersList";
import ContactPhoto from '../../assets/contactAvatar.png';

export const MockedData: UsersListMocks[] = [
  {
    id: 1,
    name: 'Cecilia Sassaki',
    avatar: ContactPhoto,
    status: 'Online',
    messages: [
      {
        id: 1,
        sender: 'Cecilia',
        message: 'Tive uma ideia incrível para um projeto!😍',
        date: 'Yesterday',
        time: '11:30'
      },
      {
        id: 2,
        message: 'Sério? Me conta mais.',
        date: 'Yesterday',
        time: '11:32'
      },
      {
        id: 3,
        sender: 'Cecilia',
        message: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
        date: 'Yesterday',
        time: '11:34'
      },
      {
        id: 4,
        message: '#boraCodar!🚀',
        date: 'Yesterday',
        time: '11:36'
      }
    ]
  },
  {
    id: 2,
    name: 'Cecilia Sassaki 2',
    avatar: ContactPhoto,
    status: 'Offline',
    messages: [
      {
        id: 1,
        sender: 'Cecilia',
        message: 'Tive uma ideia incrível para um projeto!😍',
        date: 'Yesterday',
        time: '11:30'
      },
      {
        id: 2,
        message: 'Sério? Me conta mais.',
        date: 'Yesterday',
        time: '11:32'
      }
    ]
  },
  {
    id: 3,
    name: 'Cecilia Sassaki - Antigo',
    avatar: '',
    status: 'Offline',
    messages: [
      {
        id: 1,
        sender: 'Cecilia',
        message: 'Add meu novo número',
        date: 'Yesterday',
        time: '11:30'
      },
      {
        id: 2,
        message: 'Ok, vou add.',
        date: 'Yesterday',
        time: '11:32'
      }
    ]
  },
  {
    id: 4,
    name: 'Amor',
    avatar: '',
    status: 'Offline',
    messages: [
      {
        id: 1,
        sender: 'Amor',
        message: 'Te vejo mais tarde. Bjus!!',
        date: 'Yesterday',
        time: '11:30'
      },
      {
        id: 2,
        message: 'Ok, Bjos.😘😘😘',
        date: 'Yesterday',
        time: '11:32'
      }
    ]
  },
  {
    id: 5,
    name: 'Amor',
    avatar: '',
    status: 'Offline',
    messages: [
      {
        id: 1,
        sender: 'Amor',
        message: 'Te vejo mais tarde. Bjus!!',
        date: 'Yesterday',
        time: '11:30'
      },
      {
        id: 2,
        message: 'Ok, Bjos.😘😘😘',
        date: 'Yesterday',
        time: '11:32'
      }
    ]
  },
  {
    id: 6,
    name: 'Amor',
    avatar: '',
    status: 'Offline',
    messages: [
      {
        id: 1,
        sender: 'Amor',
        message: 'Te vejo mais tarde. Bjus!!',
        date: 'Yesterday',
        time: '11:30'
      },
      {
        id: 2,
        message: 'Ok, Bjos.😘😘😘',
        date: 'Yesterday',
        time: '11:32'
      }
    ]
  }
];