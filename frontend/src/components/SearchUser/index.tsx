import { SearchUserProps } from "../../types/SearchUser";

export function SearchUser(props: SearchUserProps) {
  return (
    <>
      <input
        type='text'
        onChange={props.setInput()}
      />
    </>
  );
};