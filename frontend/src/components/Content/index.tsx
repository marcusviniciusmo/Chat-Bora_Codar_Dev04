import { useState } from 'react';
import ContactAvatar from '../../assets/contactAvatar.png';
import { ContactInfo } from "../ContactInfo";
import { Historic } from "../Historic";
import { NoChat } from '../NoChat';
import { Send } from "../Send";
import { Container } from "./styles";

type ContentProps = {
  contactSelected: {
    id: number;
    name: string;
    avatar: string;
    status: string;
    messages: {
      id: number;
      sender?: string;
      message: string;
      date: string;
      time: string;
    }[];
  };
};

export function Content(props: ContentProps) {
  const [chatContent, setChatContent] = useState<boolean>(true);

  const getTimeFromLastMessage = () => {
    return props.contactSelected.messages[props.contactSelected.messages.length - 1].time;
  };

  return (
    <Container>
      {
        chatContent
          ? <>
            <ContactInfo
              avatar={props.contactSelected.avatar}
              name={props.contactSelected.name}
              status={props.contactSelected.status}
              time={getTimeFromLastMessage()}
              chatContent={chatContent}
              setChatContent={setChatContent}
            />

            <Historic
              messagesContactSelected={props.contactSelected.messages}
            />

            <Send />

          </>
          : <NoChat />
      }
    </Container>
  );
};