import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/Chatlog';
import chatData from './data/messages.json';

const Chat = {
  id: 1,
  sender:'Vladimir',
  body:'why are you arguing with me',
  timeStamp:'2018-05-29T22:49:06+00:00',
  liked: false
};

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* <ChatEntry entries={Chat} /> */}
        {/* Wave 02: Render ChatLog component */}
        <ChatLog
          entries={chatData}
        />
      </main>
    </div>
  );
};

export default App;
