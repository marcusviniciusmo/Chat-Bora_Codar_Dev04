import { UserMocks } from "../../types/User";
import { Refresh, Chat, Settings } from '@mui/icons-material';

export const MockedData: UserMocks[] = [
  {
    icon: Refresh,
    title: 'Refresh'
  },
  {
    icon: Chat,
    title: 'New chat'
  },
  {
    icon: Settings,
    title: 'Settings'
  }
];