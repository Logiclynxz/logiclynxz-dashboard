
import ChatList from "./ChatList"
import Conversation from "./Conversation"

export default function Message() {
  return (
    <div className="grid grid-cols-[300px_1fr]  w-full bg-background">
        <ChatList/>
        <Conversation/>
    </div>
  )
}




