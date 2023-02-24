import { UserInfo } from "../UserInfo";
import { ContentChat } from "../ContentChat";
import ContactAvatar from '../../assets/userCecilia.png';

export function UserChat() {
  return (
    <>
      <h1>USER CHAT Component</h1>

      <UserInfo
        background={ContactAvatar}
        contactName='Cecilia Sassaki'
        status='online'
      />

      <ContentChat />
    </>
  );
};