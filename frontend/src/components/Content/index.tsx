import { ContactInfo } from "../ContactInfo";
import { Historic } from "../Historic";
import { Send } from "../Send";
import { Container } from "./styles";

export function Content() {
  return (
    <Container>
      <ContactInfo />

      <Historic />

      <Send />
    </Container>
  );
};