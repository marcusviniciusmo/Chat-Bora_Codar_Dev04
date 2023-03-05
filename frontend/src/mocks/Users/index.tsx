import { UsersProps } from "../../types/Users";
import AvatarCecilia from '../../assets/userCecilia.png';
import { LastMessage } from "../../components/Users/styles";

export const MockedData: UsersProps[] = [
  {
    id: 1,
    avatar: AvatarCecilia,
    name: 'Cecilia Sassaki',
    user: 'Você: ',
    lastMessage: '#boraCodar! 🚀',
    date: 'Yesterday'
  }
];