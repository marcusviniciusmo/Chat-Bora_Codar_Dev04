import { SentMessage } from "../SentMessage";
import { Container } from "./styles";

export function Historic() {
  return (
    <Container>
      <SentMessage
        sender='Cecilia'
        time='11:30'
        message='Tive uma ideia incrível para um projeto!😍'
      />

      <SentMessage
        time='11:32'
        message='Sério? Me conta mais.'
      />

      <SentMessage
        sender='Cecilia'
        time='11:34'
        message={`E se a gente fizesse um chat moderno e responsivo em apenas uma semana?`}
      />

      <SentMessage
        time='11:36'
        message='#boraCodar!🚀'
      />
    </Container>
  );
};