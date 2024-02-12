import React from "react";

const Message = () => {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-bubble">93428579</div>
        <div className="chat-footer opacity-50">12:46</div>
      </div>
    </>
  );
};

export default Message;