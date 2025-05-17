import React from "react";
import Meme from "./Meme";
import "../styles/MemeList.css";

const MemeList = ({ memes, onVote, onStar }) => {
  if (!memes || memes.length === 0) {
    return <div>List Empty</div>;
  }
  return (
    <div className="meme-list-container">
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} onVote={onVote} onStar={onStar} />
      ))}
    </div>
  );
};

export default MemeList;
