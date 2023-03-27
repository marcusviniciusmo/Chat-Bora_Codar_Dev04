import { Container, Field, Button, Icon } from "./styles";
import SendIcon from '../../assets/sendIcon.png';

export function Send() {
  return (
    <Container>
      <Field
        type='text'
        placeholder='Digite sua mensagem'
      />

      <Button>
        <Icon src={SendIcon} title='Send' />
      </Button>
    </Container>
  );
};