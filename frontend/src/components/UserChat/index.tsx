import { UserInfo } from "../UserInfo";
import { ContentChat } from "../ContentChat";
import ContactAvatar from '../../assets/userCecilia.png';
import { Container } from "./styles";

export function UserChat() {
  return (
    <Container>
      <UserInfo
        background={ContactAvatar}
        contactName='Cecilia Sassaki'
        status='online'
      />

      <ContentChat />
    </Container>
  );
};