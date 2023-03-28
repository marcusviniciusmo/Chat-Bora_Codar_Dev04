import { Container, Content, Avatar, Icons, Icon } from "./styles";
import { Refresh, Chat, Settings } from '@mui/icons-material';

export function User() {
  return (
    <Container>
      <Content>
        <Avatar>NO PHOTO</Avatar>

        <Icons>
          <Icon>
            <Refresh titleAccess='Atualizar' />
          </Icon>

          <Icon>
            <Chat titleAccess='Nova conversa' />
          </Icon>

          <Icon>
            <Settings titleAccess='Configuraçōes' />
          </Icon>
        </Icons>
      </Content>
    </Container>
  );
};