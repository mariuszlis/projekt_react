import React from "react";
import MemeList from "../components/MemeList";

const Regular = ({ memes, onVote, onStar }) => {
  const regularMemes = memes.filter((meme) => meme.upvote - meme.downvote <= 5);
  return <MemeList memes={regularMemes} onVote={onVote} onStar={onStar} />;
};

export default Regular;
