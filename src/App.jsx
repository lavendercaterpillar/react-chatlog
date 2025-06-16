import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/Chatlog';
import chatData from './data/messages.json';
import React, { useState } from 'react';


// const Chat = {
//   id: 1,
//   sender:'Vladimir',
//   body:'why are you arguing with me',
//   timeStamp:'2018-05-29T22:49:06+00:00',
//   liked: false
// };

const App = () => {
  const [entries, setEntries] = useState(chatData);

  const toggleLike = (id) => {
    const updatedEntries = entries.map((entry) =>
      entry.id === id ? { ...entry, liked: !entry.liked } : entry
    );
    setEntries(updatedEntries);
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Ellie Chat Log</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* <ChatEntry entries={Chat} /> */}
        {/* Wave 02: Render ChatLog component */}
        <ChatLog
          entries={chatData}
          onLikeToggle={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
