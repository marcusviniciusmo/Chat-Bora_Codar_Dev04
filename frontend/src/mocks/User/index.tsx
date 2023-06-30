import { UserMocks } from "../../types/User";
import { Refresh, Chat, Settings } from '@mui/icons-material';

export const MockedData: UserMocks[] = [
  {
    id: 1,
    icon: Refresh,
    title: 'Refresh'
  },
  {
    id: 2,
    icon: Chat,
    title: 'New chat'
  },
  {
    id: 3,
    icon: Settings,
    title: 'Settings'
  }
];