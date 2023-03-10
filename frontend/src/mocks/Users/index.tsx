import { UsersMocks } from "../../types/Users";
import AvatarCecilia from '../../assets/userCecilia.png';

export const MockedData: UsersMocks[] = [
  {
    id: 1,
    avatar: AvatarCecilia,
    name: 'Cecilia Sassaki',
    user: 'Você: ',
    lastMessage: '#boraCodar! 🚀',
    date: 'Yesterday',
    statusOnline: true
  },
  {
    id: 2,
    avatar: AvatarCecilia,
    name: 'Cecilia Sassaki 2',
    user: 'Você: ',
    lastMessage: 'Tchau',
    date: '2 days ago',
    statusOnline: false
  },
  {
    id: 3,
    avatar: AvatarCecilia,
    name: 'Cecilia - Antigo',
    user: 'Você: ',
    lastMessage: 'Ok. Vou adicionar',
    date: '1 week ago',
    statusOnline: false
  }
];