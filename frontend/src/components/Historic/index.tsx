import { SentMessage } from "../SentMessage"

export function Historic() {
  return (
    <>
      <h1>HISTORIC Component</h1>

      <SentMessage />
      <h4>Cecilia - 11:30</h4>
      <h5>Tive uma ideia incrível para um projeto!😍</h5>

      <SentMessage />
      <h4>Você - 11:32</h4>
      <h5>Sério? Me conta mais.</h5>

      <SentMessage />
      <h4>Cecilia - 11:34</h4>
      <h5>E se a gente fizesse um chat moderno e responsivo em apenas uma semana?</h5>

      <SentMessage />
      <h4>Você - 11:36</h4>
      <h5 >#boraCodar!🚀</h5>
    </>
  );
};