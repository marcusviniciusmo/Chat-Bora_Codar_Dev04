import { ContactInfo } from "../ContactInfo";
import { Historic } from "../Historic";

export function Content() {
  return (
    <>
      <h1>CONTENT Component</h1>

      <ContactInfo />
      <h3>AQUI VAI UM BOTAO - Close</h3>

      <Historic />

      <h6>Digite sua mensagem</h6>
      <h3>AQUI VAI UM BOTAO - ENVIAR</h3>
    </>
  );
};