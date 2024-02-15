import { trusted } from "mongoose";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { getRandomEmoji } from "../../utils/emojis";



const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
  	// cleanup function (unmounts)
  	return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  // const selectedConversation = false;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 pb-2">
            <span className="label-text px-3">To:</span>{""}
            <span className="text-blue-200 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  // const emoji = getRandomEmoji();
  const [currentEmoji , setCurrentEmoji] = useState(getRandomEmoji())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentEmoji(getRandomEmoji());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p> Welcome👋 <strong className="text-blue-400">{authUser.fullName}</strong> {currentEmoji}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center text-green-500" />
      </div>
    </div>
  );
};
