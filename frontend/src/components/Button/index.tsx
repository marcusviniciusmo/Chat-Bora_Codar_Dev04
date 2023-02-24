import IconSend from '../../assets/buttonSend.png';
import { Container, Icon } from "./styles";

export function Button() {
  return (
    <Container>
      <Icon src={IconSend} title='Send' />
    </Container>
  );
};