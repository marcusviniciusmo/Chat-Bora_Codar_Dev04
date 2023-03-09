import { Input } from "../Input";
import { SearchUserProps } from "../../types/SearchUser";
import { Container } from "./styles";

export function SearchUser(props: SearchUserProps) {
  return (
    <Container>
      <Input setInput={props.setInput} />
    </Container>
  );
};