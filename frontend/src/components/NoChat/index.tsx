import ChatLogo from '../../assets/chatLogo.png';
import { Container, Logo, Title, Text } from './styles';

export function NoChat() {
  return (
    <Container>
      <Logo src={ChatLogo} />
      <Title>Chat Web</Title>
      <Text>Send or receive messages from your contacts.</Text>
    </Container>
  );
};