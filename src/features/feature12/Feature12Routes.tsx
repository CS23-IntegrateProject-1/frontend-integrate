import { ChatBotPage } from "./pages/chatBotPage/ChatBotPage";
import { CommunityChatPage } from "./pages/communityChatPage/CommunityChatPage";
export const Feature12Routes = () => {
  return [
    {
      path: "/chatbot",
      element: <ChatBotPage/>
    },
    {
      path: "/communitychat",
      element: <CommunityChatPage/>
    },
  ];
};
