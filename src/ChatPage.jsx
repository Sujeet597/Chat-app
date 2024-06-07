import { PrettyChatWindow } from "react-chat-engine-pretty";


const ChatPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
      projectId ='081e5e83-93a5-4000-a7e8-a4a5313042e5'
      username = {props.user.username}
      secret ={props.user.secret}
      style = {{height: '100%'}}
      />
    </div>
  );
};

export default ChatPage;
