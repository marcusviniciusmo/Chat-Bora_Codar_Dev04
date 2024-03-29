import { useEffect, useState } from "react";
import { ContactInfo } from "../ContactInfo";
import { Historic } from "../Historic";
import { NoChat } from '../NoChat';
import { Send } from "../Send";
import { ContentProps, ContentMessagesHistoricProps } from "../../types/Content";
import { GetLocaleDate, GetLocaleTime } from "../../utils/Functions";
import { Container } from "./styles";

export function Content(props: ContentProps) {
  const [messagesList, setMessagesList] = useState<ContentMessagesHistoricProps[]>([]);

  useEffect(() => {
    setMessagesList(props.contactSelected?.messages || []);
  }, [props.contactSelected]);

  useEffect(() => {
    props.setUserContent(props.contactSelected)
  }, [props.contactSelected]);

  const getTimeFromLastMessage = () => {
    return props.contactSelected.
    messages[props.contactSelected.messages.length - 1].time;
  };

  const sendMessage = (message: string) => {
    const newMessage:ContentMessagesHistoricProps = {
      id: messagesList.length + 1,
      message: message,
      date: GetLocaleDate(),
      time: GetLocaleTime()
    };

    const updateMessages = [...messagesList, newMessage];
    setMessagesList(updateMessages);

    props.setContactSelected({
      ...props.contactSelected,
      messages: updateMessages
    });
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
              messages={messagesList!}
            />

            <Send onMessageSend={sendMessage} />

          </>
          : <NoChat />
      }
    </Container>
  );
};