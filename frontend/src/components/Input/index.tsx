import { InputProps } from "../../types/Input";

export function Input(props: InputProps) {
  return (
    <input
        type='text'
        placeholder='Search user or message'
        onChange={props.setInput()}
      />
  );
};