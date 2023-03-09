import { SearchUserProps } from "../../types/SearchUser";
import { Container } from "./styles";

export function SearchUser(props: SearchUserProps) {
  return (
    <Container>
      <input
        type='text'
        placeholder='Search user or message'
        onChange={props.setInput()}
      />
    </Container>
  );
};