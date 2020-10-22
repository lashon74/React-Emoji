import React from "react";
import emojipedia from "../emojipedia";
import Post from "./Post";

function createPost(emojiTerm) {
  return (
    <Post
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createPost)}</dl>
    </div>
  );
}

export default App;
