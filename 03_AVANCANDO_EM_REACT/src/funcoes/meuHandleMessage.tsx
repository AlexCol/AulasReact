// messageFunctions.js
import { useState } from 'react';

export const meuHandleMessage = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (msg: string) => {
    setMessage(msg);
  };

  return {
    message,
    handleMessage,
  };
};