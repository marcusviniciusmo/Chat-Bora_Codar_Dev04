import { ContactInfo } from "../ContactInfo";
import { Historic } from "../Historic";
import { NoChat } from '../NoChat';
import { Send } from "../Send";
import { ContentProps } from "../../types/Content";
import { Container } from "./styles";

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