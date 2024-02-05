import React, { useState, useEffect } from "react";

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <div className="bot-message">
        <img src="https://cdn1.vectorstock.com/i/1000x1000/16/60/chat-bot-icon-robot-virtual-assistant-vector-43541660.jpg" alt="" width={'20'}/>
        {isLoading ? "..." : message}</div>
    </div>
  );
}
