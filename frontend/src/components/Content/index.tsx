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
  chatContent: boolean;
  setChatContent: Function;
};

export function Content(props: ContentProps) {
  const getTimeFromLastMessage = () => {
    return props.contactSelected.
    messages[props.contactSelected.messages.length - 1].time;
  };

  return (
    <Container>
      {
        props.chatContent
          ? <>
            <ContactInfo
              avatar={props.contactSelected.avatar}
              name={props.contactSelected.name}
              status={props.contactSelected.status}
              time={getTimeFromLastMessage()}
              chatContent={props.chatContent}
              setChatContent={props.setChatContent}
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