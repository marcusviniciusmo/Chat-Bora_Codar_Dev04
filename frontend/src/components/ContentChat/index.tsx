import { SentMessage } from "../SentMessage";
import { Send } from "../Send";

export function ContentChat() {
  return (
    <>
      <h1>CONTENT CHAT Component</h1>

      <SentMessage
        className='contact'
        contactName='Cecilia Sassaki'
        time='11:30'
        message='Tive uma idéia incrível para um projeto!😍'
      />

      <SentMessage
        className='user'
        time='11:32'
        message='Sério? Me conta mais.'
      />

      <SentMessage
        className='contact'
        contactName='Cecilia Sassaki'
        time='11:34'
        message={`E se a gente fizesse um chat moderno e responsivo em
         apenas uma semana?`}
      />

      <SentMessage
        className='user'
        time='11:36'
        message='#boraCodar! 🚀'
      />

      <Send />
    </>
  );
};