import React from "react";

export default function UserMessage({ text }) {
  return (
    <div className="message-container">
      <div className="user-message">
        {text}
        <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" width={'20'}/>
        </div>
    </div>
  );
}
