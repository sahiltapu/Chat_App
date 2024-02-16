import { useSocketContext } from "../../context/SocketContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div
          className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
          onClick={() => setSelectedConversation(conversation)}
        >
          <div className={`avatar ${isOnline ? "online" : " "}`}>
            <div className="w-12 rounded-full">
              {conversation.profilePic ? (
                <img src={conversation.profilePic} alt="user avatar" />
              ) : (
                <div className="loading loading-spinner"/>
              )}
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-200">
                {conversation.fullName || <Skeleton count={10} />}
              </p>
              <span className="text-xl">
                {emoji || <Skeleton count={10} />}
              </span>
            </div>
          </div>
        </div>

        {!lastIdx && <div className="divider my-1 p1-0 h-1 relative"></div>}
      </SkeletonTheme>
    </>
  );
};
export default Conversation;