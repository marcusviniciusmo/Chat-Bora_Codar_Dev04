import ContactAvatar from '../../assets/contactAvatar.png';
import { ContactInfo } from "../ContactInfo";
import { Historic } from "../Historic";
import { Send } from "../Send";
import { Container } from "./styles";

export function Content() {
  return (
    <Container>
      <ContactInfo
        avatar={ContactAvatar}
        name='Cecilia Sassaki'
        status='Online'
        time='11:30'
      />

      <Historic />

      <Send />
    </Container>
  );
};