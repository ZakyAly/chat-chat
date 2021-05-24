import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

const projectID = "0913ac2c-96db-436a-a6f2-e08090d85cce";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      // onNewMessage={() =>
      //   new Audio(
      //     "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
      //   ).play()
      // }
    />
  );
};

export default App;
