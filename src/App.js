import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

import BotMessage from "./Components/BotMessage";
import UserMessage from "./Components/UserMessage";
import Messages from "./Components/Messages";
import Input from "./Components/Input";

import API from "./ChatBotAPI";

import Header from "./Components/Header";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Chatbot />
    </div>
  );
}

export default App;
