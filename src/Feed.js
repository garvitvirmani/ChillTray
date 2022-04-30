import React from "react";
import Entry from "./Entry";
import samplepedia from "./samplepedia";
import "./Feed.css";
//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

function createEntry(Term) {
  return (
    <Entry className="entry"
      key={Term.id}
      tit={Term.tit}
      para={Term.para}
      src={Term.src}
    />
  );
}

function Feed() {
  return (
    <div>
      <dl className="dictionary">{samplepedia.map(createEntry)}</dl>
    </div>
  );
}

export default Feed;
