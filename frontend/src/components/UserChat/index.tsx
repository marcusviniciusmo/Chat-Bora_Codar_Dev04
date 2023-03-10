import { UserInfo } from "../UserInfo";
import { ContentChat } from "../ContentChat";
import { Container } from "./styles";
import { UserChatProps } from "../../types/UserChat";

export function UserChat(props: UserChatProps) {
  return (
    <Container>
      <UserInfo
        background={props.user!?.avatar}
        contactName={props.user!?.name}
        status={props.user!?.statusOnline ? 'online' : 'offline'}
      />

      <ContentChat />
    </Container>
  );
};