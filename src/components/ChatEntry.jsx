import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';


// const ChatEntry = ({id, sender, body, timeStamp, liked}) => {
const ChatEntry = ({chats}) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{chats.sender}</h2>
      <section className="entry-bubble">
        <p>{chats.body}</p>
        <p className="entry-time"><TimeStamp time={chats.timeStamp} /></p>
        <button className="like">🤍</button>
        {/* <button className="like">{chats.liked ? '❤️' : '🤍'}</button> */}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  chats:PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ChatEntry;
