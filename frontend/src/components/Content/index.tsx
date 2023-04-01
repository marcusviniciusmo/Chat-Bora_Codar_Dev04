import { useState } from 'react';
import ContactAvatar from '../../assets/contactAvatar.png';
import { ContactInfo } from "../ContactInfo";
import { Historic } from "../Historic";
import { NoChat } from '../NoChat';
import { Send } from "../Send";
import { Container } from "./styles";

export function Content() {
  const [chatContent, setChatContent] = useState<boolean>(true);

  return (
    <Container>
      {
        chatContent
          ? <>
            <ContactInfo
              avatar={ContactAvatar}
              name='Cecilia Sassaki'
              status='Online'
              time='11:30'
              chatContent={chatContent}
              setChatContent={setChatContent}
            />

            <Historic />

            <Send />

          </>
          : <NoChat />
      }
    </Container>
  );
};